const { app, BrowserWindow, Menu, ipcMain, dialog } = require("electron");
const fs = require("fs/promises");
const path = require("path");
const tls = require("tls");
const { autoUpdater } = require("electron-updater");

const SMTP_HOST = "smtp.gmail.com";
const SMTP_PORT = 465;
const UPDATE_CHECK_DELAY_MS = 3000;
const DEFERRED_UPDATE_CHECK_DELAY_MS = 250;

let updaterState = {
  deferredVersion: ""
};
let isInstallingDeferredUpdate = false;
let promptedUpdateVersion = "";

function getDataFilePath() {
  return path.join(app.getPath("userData"), "app-data.json");
}

function getQuotesFilePath() {
  return path.join(__dirname, "data", "quotes.json");
}

function getUpdaterStateFilePath() {
  return path.join(app.getPath("userData"), "updater-state.json");
}

function normalizeUpdaterState(rawState) {
  return {
    deferredVersion: typeof rawState?.deferredVersion === "string"
      ? rawState.deferredVersion.trim()
      : ""
  };
}

async function loadUpdaterState() {
  const updaterStatePath = getUpdaterStateFilePath();

  try {
    const raw = await fs.readFile(updaterStatePath, "utf8");
    return normalizeUpdaterState(JSON.parse(raw));
  } catch (error) {
    if (error && error.code === "ENOENT") {
      return normalizeUpdaterState(null);
    }

    console.error("Failed to load updater state.", error);
    return normalizeUpdaterState(null);
  }
}

async function saveUpdaterState(nextState) {
  updaterState = normalizeUpdaterState(nextState);
  const updaterStatePath = getUpdaterStateFilePath();
  await fs.mkdir(path.dirname(updaterStatePath), { recursive: true });
  await fs.writeFile(updaterStatePath, JSON.stringify(updaterState, null, 2), "utf8");
}

async function clearDeferredUpdateVersion() {
  if (!updaterState.deferredVersion) {
    return;
  }

  await saveUpdaterState({
    ...updaterState,
    deferredVersion: ""
  });
}

function installDownloadedUpdate(installReason, version) {
  if (isInstallingDeferredUpdate) {
    return;
  }

  isInstallingDeferredUpdate = true;
  console.log(`Installing downloaded update ${version} (${installReason}).`);
  autoUpdater.quitAndInstall(true, true);
}

async function promptForDownloadedUpdate(info) {
  const targetWindow = BrowserWindow.getFocusedWindow() ?? BrowserWindow.getAllWindows()[0];
  const messageBoxOptions = {
    type: "info",
    buttons: ["지금 설치하고 재시작", "다음 실행에 설치"],
    defaultId: 0,
    cancelId: 1,
    noLink: true,
    title: "업데이트 준비 완료",
    message: "업데이트가 있습니다. 지금 설치하시겠습니까?",
    detail: `버전 ${info.version} 업데이트가 다운로드되었습니다.`
  };
  const result = targetWindow
    ? await dialog.showMessageBox(targetWindow, messageBoxOptions)
    : await dialog.showMessageBox(messageBoxOptions);

  if (result.response === 0) {
    await saveUpdaterState({
      ...updaterState,
      deferredVersion: ""
    });
    installDownloadedUpdate("install-now", info.version);
    return;
  }

  await saveUpdaterState({
    ...updaterState,
    deferredVersion: info.version
  });
  console.log(`Deferred update ${info.version} until next app launch.`);
}

function createWindow() {
  const iconPath = path.join(__dirname, "src", "assets", "app-icon.png");
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 960,
    minHeight: 640,
    icon: iconPath,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  mainWindow.loadFile(path.join(__dirname, "src", "index.html"));
}

function createAppMenu() {
  return Menu.buildFromTemplate([
    {
      label: "File",
      submenu: [
        {
          label: "Setting",
          click: (_menuItem, browserWindow) => {
            const targetWindow = browserWindow ?? BrowserWindow.getFocusedWindow();
            targetWindow?.webContents.send("app-menu:open-settings");
          }
        },
        { type: "separator" },
        {
          label: "Quit",
          role: "quit"
        }
      ]
    }
  ]);
}

function setupAutoUpdater() {
  if (!app.isPackaged) {
    return;
  }

  autoUpdater.autoDownload = true;
  autoUpdater.autoInstallOnAppQuit = false;
  autoUpdater.autoRunAppAfterInstall = true;

  autoUpdater.on("checking-for-update", () => {
    console.log("Checking for app updates.");
  });

  autoUpdater.on("update-available", (info) => {
    console.log(`Update available: ${info.version}`);
  });

  autoUpdater.on("update-not-available", () => {
    console.log("No app update available.");
  });

  autoUpdater.on("download-progress", (progress) => {
    console.log(`Update download progress: ${Math.round(progress.percent)}%`);
  });

  autoUpdater.on("error", (error) => {
    console.error("Auto update failed.", error);
  });

  autoUpdater.on("update-downloaded", async (info) => {
    console.log(`Update downloaded: ${info.version}.`);

    try {
      if (updaterState.deferredVersion === info.version) {
        installDownloadedUpdate("deferred-next-launch", info.version);
        return;
      }

      if (promptedUpdateVersion === info.version) {
        return;
      }

      promptedUpdateVersion = info.version;
      await promptForDownloadedUpdate(info);
    } catch (error) {
      console.error(`Failed to handle downloaded update ${info.version}.`, error);
      promptedUpdateVersion = "";
    }
  });

  const checkDelay = updaterState.deferredVersion
    ? DEFERRED_UPDATE_CHECK_DELAY_MS
    : UPDATE_CHECK_DELAY_MS;

  setTimeout(() => {
    autoUpdater.checkForUpdates().catch((error) => {
      console.error("Failed to check for updates.", error);
    });
  }, checkDelay);
}

function encodeMailHeader(value) {
  return `=?UTF-8?B?${Buffer.from(String(value), "utf8").toString("base64")}?=`;
}

function normalizeEmailAddress(value) {
  return String(value ?? "").trim();
}

function createBoundary(prefix) {
  return `${prefix}_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function dotStuffSmtpData(data) {
  return data.replace(/^\./gm, "..");
}

function splitSmtpRecipients(value) {
  return String(value ?? "")
    .split(/[;,]/)
    .map((email) => email.trim())
    .filter(Boolean);
}

function foldBase64(base64Text) {
  return String(base64Text ?? "").replace(/.{1,76}/g, "$&\r\n").trimEnd();
}

function encodeAttachmentFilename(value) {
  return encodeURIComponent(String(value ?? "report.pdf"))
    .replace(/[!'()*]/g, (character) =>
      `%${character.charCodeAt(0).toString(16).toUpperCase()}`
    );
}

async function normalizeMailAttachments(attachments = []) {
  return Promise.all(
    attachments.map(async (attachment) => {
      const filename = attachment.filename || path.basename(attachment.path || "report.pdf");
      const content = attachment.path
        ? await fs.readFile(attachment.path)
        : Buffer.from(String(attachment.content ?? ""), "utf8");

      return {
        filename,
        contentType: attachment.contentType || "application/pdf",
        contentBase64: Buffer.from(content).toString("base64")
      };
    })
  );
}

function createEmailMessage({ from, to, subject, text, html, attachments = [] }) {
  const mixedBoundary = createBoundary("mixed");
  const alternativeBoundary = createBoundary("alternative");
  const recipients = Array.isArray(to) ? to : splitSmtpRecipients(to);
  const headers = [
    `From: ${from}`,
    `To: ${recipients.join(", ")}`,
    `Subject: ${encodeMailHeader(subject)}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/mixed; boundary="${mixedBoundary}"`
  ];

  const bodyParts = [
    `--${mixedBoundary}`,
    `Content-Type: multipart/alternative; boundary="${alternativeBoundary}"`,
    "",
    `--${alternativeBoundary}`,
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: base64",
    "",
    foldBase64(Buffer.from(text || "", "utf8").toString("base64")),
    `--${alternativeBoundary}`,
    'Content-Type: text/html; charset="UTF-8"',
    "Content-Transfer-Encoding: base64",
    "",
    foldBase64(Buffer.from(html || "", "utf8").toString("base64")),
    `--${alternativeBoundary}--`
  ];

  attachments.forEach((attachment) => {
    const filename = attachment.filename || "report.pdf";
    const encodedFilename = encodeAttachmentFilename(filename);
    bodyParts.push(
      `--${mixedBoundary}`,
      `Content-Type: ${attachment.contentType || "application/pdf"}; name*=UTF-8''${encodedFilename}`,
      "Content-Transfer-Encoding: base64",
      `Content-Disposition: attachment; filename*=UTF-8''${encodedFilename}`,
      "",
      foldBase64(attachment.contentBase64)
    );
  });

  bodyParts.push(`--${mixedBoundary}--`, "");
  return [...headers, "", ...bodyParts].join("\r\n");
}

function createSmtpClient() {
  return new Promise((resolve, reject) => {
    const socket = tls.connect(SMTP_PORT, SMTP_HOST, { servername: SMTP_HOST });
    let buffer = "";
    const pendingResponses = [];

    const cleanup = () => {
      socket.removeAllListeners("data");
      socket.removeAllListeners("error");
      socket.removeAllListeners("end");
    };

    const readResponse = () => new Promise((responseResolve, responseReject) => {
      pendingResponses.push({ resolve: responseResolve, reject: responseReject });
      processResponses();
    });

    const processResponses = () => {
      if (pendingResponses.length === 0) {
        return;
      }

      const lines = buffer.split(/\r?\n/);
      const completeLines = buffer.endsWith("\n") ? lines.slice(0, -1) : lines.slice(0, -1);
      if (completeLines.length === 0) {
        return;
      }

      const responseLines = [];
      let consumedLength = 0;

      for (const line of completeLines) {
        responseLines.push(line);
        consumedLength += line.length + (buffer[consumedLength + line.length] === "\r" ? 2 : 1);
        if (/^\d{3} /.test(line)) {
          buffer = buffer.slice(consumedLength);
          const pending = pendingResponses.shift();
          pending.resolve(responseLines.join("\n"));
          processResponses();
          return;
        }
      }
    };

    const sendCommand = async (command, expectedCodes = []) => {
      socket.write(`${command}\r\n`);
      const response = await readResponse();
      const code = Number(response.slice(0, 3));
      if (expectedCodes.length > 0 && !expectedCodes.includes(code)) {
        throw new Error(`SMTP command failed (${code}): ${response}`);
      }
      return response;
    };

    socket.on("data", (chunk) => {
      buffer += chunk.toString("utf8");
      processResponses();
    });

    socket.on("error", (error) => {
      cleanup();
      while (pendingResponses.length > 0) {
        pendingResponses.shift().reject(error);
      }
      reject(error);
    });

    socket.on("end", () => {
      const error = new Error("SMTP connection closed.");
      while (pendingResponses.length > 0) {
        pendingResponses.shift().reject(error);
      }
    });

    socket.on("secureConnect", async () => {
      try {
        await readResponse();
        resolve({ socket, sendCommand, readResponse, cleanup });
      } catch (error) {
        cleanup();
        reject(error);
      }
    });
  });
}

async function sendGmailMessage({ from, password, to, subject, text, html, attachments }) {
  const sender = normalizeEmailAddress(from);
  const recipients = splitSmtpRecipients(to);
  const appPassword = String(password ?? "").replace(/\s+/g, "");

  if (!sender || recipients.length === 0 || !appPassword) {
    throw new Error("메일 발송 설정이 부족합니다.");
  }

  const normalizedAttachments = await normalizeMailAttachments(attachments);
  const client = await createSmtpClient();
  const message = createEmailMessage({
    from: sender,
    to: recipients,
    subject,
    text,
    html,
    attachments: normalizedAttachments
  });

  try {
    await client.sendCommand("EHLO localhost", [250]);
    await client.sendCommand("AUTH LOGIN", [334]);
    await client.sendCommand(Buffer.from(sender, "utf8").toString("base64"), [334]);
    await client.sendCommand(Buffer.from(appPassword, "utf8").toString("base64"), [235]);
    await client.sendCommand(`MAIL FROM:<${sender}>`, [250]);

    for (const recipient of recipients) {
      await client.sendCommand(`RCPT TO:<${recipient}>`, [250, 251]);
    }

    await client.sendCommand("DATA", [354]);
    client.socket.write(`${dotStuffSmtpData(message)}\r\n.\r\n`);
    const response = await client.readResponse();
    const responseCode = Number(response.slice(0, 3));
    if (responseCode !== 250) {
      throw new Error(`SMTP DATA failed (${responseCode}): ${response}`);
    }
    await client.sendCommand("QUIT", [221]);
    return response;
  } finally {
    client.cleanup();
    client.socket.end();
  }
}

async function waitForPdfRenderReady(pdfWindow) {
  await pdfWindow.webContents.executeJavaScript(`
    Promise.race([
      (async () => {
        if (document.fonts && document.fonts.ready) {
          await document.fonts.ready;
        }
        await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      })(),
      new Promise((resolve) => setTimeout(resolve, 2500))
    ])
  `);

  const hasReportSheet = await pdfWindow.webContents.executeJavaScript(`
    Boolean(document.querySelector(".reportSheet") && document.body && document.body.innerText.trim())
  `);

  if (!hasReportSheet) {
    throw new Error("PDF로 출력할 보고서 화면이 비어 있습니다.");
  }
}

function createReportWindow() {
  return new BrowserWindow({
    show: false,
    webPreferences: {
      offscreen: true,
      contextIsolation: true,
      nodeIntegration: false
    }
  });
}

async function loadReportHtml(reportWindow, html) {
  const dataUrl = `data:text/html;charset=utf-8;base64,${Buffer.from(html, "utf8").toString("base64")}`;
  await reportWindow.loadURL(dataUrl);
  await waitForPdfRenderReady(reportWindow);
}

async function saveReportPdf({ directoryPath, fileName, html }) {
  if (!directoryPath || !fileName || typeof html !== "string") {
    throw new Error("보고서 저장 정보가 부족합니다.");
  }

  await fs.mkdir(directoryPath, { recursive: true });
  const targetPath = path.join(directoryPath, fileName);
  const pdfWindow = createReportWindow();

  try {
    await loadReportHtml(pdfWindow, html);
    const pdfBuffer = await pdfWindow.webContents.printToPDF({
      printBackground: true,
      preferCSSPageSize: true,
      pageSize: "A4",
      margins: {
        marginType: "none"
      }
    });
    await fs.writeFile(targetPath, pdfBuffer);
    return { ok: true, path: targetPath };
  } finally {
    if (!pdfWindow.isDestroyed()) {
      pdfWindow.close();
    }
  }
}

async function printReport({ html }) {
  if (typeof html !== "string") {
    throw new Error("인쇄할 보고서 정보가 부족합니다.");
  }

  const printWindow = createReportWindow();

  try {
    await loadReportHtml(printWindow, html);
    await new Promise((resolve, reject) => {
      printWindow.webContents.print(
        {
          silent: true,
          printBackground: true,
          color: false,
          copies: 2,
          pageSize: "A4"
        },
        (success, failureReason) => {
          if (!success) {
            reject(new Error(failureReason || "보고서 인쇄에 실패했습니다."));
            return;
          }

          resolve();
        }
      );
    });

    return { ok: true };
  } finally {
    if (!printWindow.isDestroyed()) {
      printWindow.close();
    }
  }
}

ipcMain.handle("storage:load", async () => {
  const dataFilePath = getDataFilePath();

  try {
    const raw = await fs.readFile(dataFilePath, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    if (error && error.code === "ENOENT") {
      return null;
    }

    throw error;
  }
});

ipcMain.handle("storage:save", async (_event, data) => {
  const dataFilePath = getDataFilePath();
  await fs.mkdir(path.dirname(dataFilePath), { recursive: true });
  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), "utf8");
  return { ok: true, path: dataFilePath };
});

ipcMain.handle("quotes:load", async () => {
  const quotesFilePath = getQuotesFilePath();

  try {
    const raw = await fs.readFile(quotesFilePath, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    if (error && error.code === "ENOENT") {
      return { quotes: [] };
    }

    throw error;
  }
});

ipcMain.handle("dialog:select-folder", async (_event, options = {}) => {
  const result = await dialog.showOpenDialog({
    title: options.title || "폴더 선택",
    defaultPath: options.defaultPath || undefined,
    properties: ["openDirectory", "createDirectory"]
  });

  if (result.canceled || result.filePaths.length === 0) {
    return null;
  }

  return result.filePaths[0];
});

ipcMain.handle("report:save-pdf", async (_event, payload) => {
  return saveReportPdf(payload);
});

ipcMain.handle("report:print", async (_event, payload) => {
  return printReport(payload);
});

ipcMain.handle("report:load-stylesheet", async (_event, reportType) => {
  const stylesheetName = reportType === "weekly" ? "weekly-report.css" : "daily-report.css";
  const stylesheetPath = path.join(__dirname, "src", "report-templates", stylesheetName);
  return fs.readFile(stylesheetPath, "utf8");
});

ipcMain.handle("mail:send", async (_event, payload) => {
  await sendGmailMessage(payload);
  return { ok: true };
});

const gotSingleInstanceLock = app.requestSingleInstanceLock();

if (!gotSingleInstanceLock) {
  app.quit();
} else {
  app.on("second-instance", () => {
    const [mainWindow] = BrowserWindow.getAllWindows();
    if (!mainWindow) {
      return;
    }

    if (mainWindow.isMinimized()) {
      mainWindow.restore();
    }
    mainWindow.focus();
  });

  app.whenReady().then(async () => {
    updaterState = await loadUpdaterState();
    if (updaterState.deferredVersion === app.getVersion()) {
      await clearDeferredUpdateVersion();
    }

    Menu.setApplicationMenu(createAppMenu());
    createWindow();
    setupAutoUpdater();

    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  });
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
