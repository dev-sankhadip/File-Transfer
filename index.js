const { app, BrowserWindow } = require('electron')
const { startServer }=require('./server/app')


function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  startServer();
  // and load the index.html of the app.
  win.loadFile('index.html')
}

app.on('ready', createWindow)