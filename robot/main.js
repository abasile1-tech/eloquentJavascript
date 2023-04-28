require('./renderer/js/animatevillage.js');
require('./renderer/js/robot.js');

const path = require('path');
const { app, BrowserWindow } = require('electron');

const isDev = process.env.NODE_ENV !== 'development';
const isMac = process.platform === 'darwin';

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: 'Robot Delivery',
    width: isDev ? 1000 : 500,
    height: 600
  });

  // Open devtools if in dev env
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}

console.log("main.js is running now");

app.whenReady().then(() => {
  createMainWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  })
});

app.on('window-all-closed', () => {
  if (!isMac) {
    app.quit();
  }
});

runRobotAnimation(VillageState.random(),goalOrientedRobot, []);

module.exports = {
  BrowserWindow
}