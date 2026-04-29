const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("appInfo", {
  name: "AutoDailyReport2",
  version: ""
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
