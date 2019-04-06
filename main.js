const electron = require('electron')
const { app, BrowserWindow, Menu, shell } = electron
const path = require('path')
const url = require('url')

const APP_NAME = 'Spark'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win = null

const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit()
  return
} else {
  app.on('second-instance', () => {
    if (win) {
      if (win.isMinimized()) win.restore()
      win.focus()
    }
  })
}

app.on('ready', init)

app.on('window-all-closed', () => {
  app.quit()
})

function createAppMenu() {
  const template = [
    {
      label: APP_NAME,
      submenu: [
        {
          label: 'Quit ' + APP_NAME,
          role: 'quit',
        },
      ],
    },
    {
      label: 'Edit',
      submenu: [
        { label: 'Undo', role: 'undo' },
        { label: 'Redo', role: 'redo' },
        { type: 'separator' },
        { label: 'Cut', role: 'cut' },
        { label: 'Copy', role: 'copy' },
        { label: 'Paste', role: 'paste' },
        { label: 'Select All', role: 'selectAll' },
      ],
    },
  ]

  Menu.setApplicationMenu(Menu.buildFromTemplate(template))
}

function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 750,
    useContentSize: true,
    center: true,
    title: APP_NAME,
  })

  win.setMenu(null)
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, 'app/index.html'),
      protocol: 'file:',
      slashes: true,
    })
  )

  win.webContents.on('new-window', function(e, url) {
    e.preventDefault()
    shell.openExternal(url)
  })
}

function init() {
  createWindow()
  if (process.argv.includes('dev')) {
    win.webContents.openDevTools()
  } else {
    createAppMenu()
  }
}
