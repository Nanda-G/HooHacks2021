const electron = require("electron");
const path = require("path");
const fs = require("fs");
const { app, BrowserWindow, Menu, ipcMain } = electron;
let win;

// ============Blank Menu==================
let template = [];
let menu = Menu.buildFromTemplate(template);

// ===========Window Creation==============
const createWindow = () => {
  win = new BrowserWindow({
    title: "Shōjiki",
    show: false,
    frame: false,
    resizable: false,
    movable: false,
    minimizable: false,
    alwaysOnTop: false,
    kiosk: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  win.loadFile("src/index.html");

  win.webContents.on("before-input-event", (event, input) => {
    if (input.control && input.key.toLowerCase() === "v") {
      event.preventDefault();
      console.log("Copy Paste | WebWiz 101");
    }
    if (input.control && input.key.toLowerCase() === "c") {
      event.preventDefault();
      console.log("Copy Paste | WebWiz 101");
    }
  });

  // Menu.setApplicationMenu(menu)
  win.toggleDevTools();
  win.on("ready-to-show", () => {
    win.show();
  });
  win.on("closed", () => {
    win = null;
  });
};

// ==========IPC Events============
ipcMain.on("close", () => {
  app.quit();
});
// ipcMain.on('image', (event, data)=>{
// 	fs.writeFile('image.png', data.photoData, 'base64', () => {
// 		console.log('saved')
// 	})
// })

// ===========App Events===========
app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
