const { contextBridge, ipcRenderer } = require("electron");

const appInfo = ipcRenderer.sendSync("app:get-info");

contextBridge.exposeInMainWorld("appInfo", {
  name: typeof appInfo?.name === "string" && appInfo.name.trim() ? appInfo.name.trim() : "AutoDailyReport2",
  version: typeof appInfo?.version === "string" ? appInfo.version.trim() : "",
  isPackaged: appInfo?.isPackaged === true
});

contextBridge.exposeInMainWorld("appStorage", {
  load: () => ipcRenderer.invoke("storage:load"),
  save: (data) => ipcRenderer.invoke("storage:save", data)
});

contextBridge.exposeInMainWorld("appQuotes", {
  load: () => ipcRenderer.invoke("quotes:load")
});

contextBridge.exposeInMainWorld("appDialogs", {
  selectFolder: (options) => ipcRenderer.invoke("dialog:select-folder", options)
});

contextBridge.exposeInMainWorld("appHolidayApi", {
  getConfigInfo: () => ipcRenderer.invoke("holiday-api:get-config-info"),
  sync: () => ipcRenderer.invoke("holiday-api:sync")
});

contextBridge.exposeInMainWorld("appDebug", {
  log: (message) => ipcRenderer.send("debug:log", message)
});

contextBridge.exposeInMainWorld("appReports", {
  savePdf: (payload) => ipcRenderer.invoke("report:save-pdf", payload),
  print: (payload) => ipcRenderer.invoke("report:print", payload),
  loadStylesheet: (reportType) => ipcRenderer.invoke("report:load-stylesheet", reportType),
  sendMail: (payload) => ipcRenderer.invoke("mail:send", payload)
});

contextBridge.exposeInMainWorld("appMenu", {
  onOpenSettings: (callback) => {
    if (typeof callback !== "function") {
      return () => {};
    }

    const listener = () => callback();
    ipcRenderer.on("app-menu:open-settings", listener);
    return () => ipcRenderer.removeListener("app-menu:open-settings", listener);
  }
});
