const path = require('path')
const { app, BrowserWindow, ipcMain } = require('electron')
const threads = require('./threads/main')
data = {}

createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            preload: path.join(__dirname, 'preload.js'),
        }
    })
    win.loadFile('app/html/index.html')
}

ipcMain.on('agregar_duende',(event, args) => {
    threads.nuevo_duende({message: 1})
})

ipcMain.on('agregar_reno', (event, args) => {
    threads.nuevo_reno({message: 1})
})

ipcMain.on('actualizar', (event, args) => {
    event.reply('actualizar',data)
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') 
        app.quit()
})

app.on('ready', () => {
    createWindow()
})

function actualizar() {
    data = threads.cantidad()
}

setInterval(actualizar, 1000)