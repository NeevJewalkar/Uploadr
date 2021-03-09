
const {app, BrowserWindow, Menu} = require('electron')

let createWindow = () => {

  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 625,
    webPreferences: {
      nodeIntegration: true
    },
    titleBarStyle: 'hiddenInset'
  })

  mainWindow.loadFile('index.html')

}

Menu.setApplicationMenu(null)

app.whenReady().then(createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})