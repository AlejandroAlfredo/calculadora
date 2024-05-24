const { app, BrowserWindow, globalShortcut } = require("electron");
const path = require("path");

const formaterEnv = (text) => {
  let textEnv = "";
  try {
    textEnv = text.replace(" ", "");
  } catch {
    textEnv = undefined;
  }
  return textEnv !== undefined ? textEnv : "";
};

// https://vitejs.dev/guide/env-and-mode.html
const viteMode = formaterEnv(import.meta.env.MODE);
const devServer = formaterEnv(import.meta.env.VITE_DEV_SERVER);

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: viteMode !== "production" ? 800 : 365,
    height: viteMode !== "production" ? 480 : 420,
    resizable: viteMode !== "production" ? true : false,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
    },
  });
  mainWindow.setMenu(null);
  if (viteMode !== "production") {
    mainWindow.loadURL(devServer);
    globalShortcut.register("Ctrl+D", () => {
      mainWindow.webContents.toggleDevTools();
    });
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/main_window/index.html`));
  }
};

app.on("ready", () => {
  // events
  //
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
