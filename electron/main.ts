import { app, BrowserWindow, ipcMain } from "electron";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let mainWindow: BrowserWindow | null = null;

async function createWindow() {
  try {
    mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: join(__dirname, "preload.js"),
        contextIsolation: true,
        nodeIntegration: false,
        devTools: true,
      },
    });

    console.log(`当前环境：${process.env.NODE_ENV}`);

    if (process.env.NODE_ENV === "development") {
      await mainWindow.loadURL("http://localhost:3001");
      mainWindow.webContents.openDevTools();
    } else {
      await mainWindow.loadFile(
        join(__dirname, "../../dist/renderer/index.html")
      );
    }
  } catch (err) {
    console.error("创建窗口失败：", err);
  }
}

// 捕获顶层 promise 拒绝
app
  .whenReady()
  .then(createWindow)
  .catch((err) => console.error("应用启动失败：", err));

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

ipcMain.handle("ping", async () => "pong from main process");
