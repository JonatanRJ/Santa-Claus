/* -- Import library -- */
const path = require('path')
const { app, BrowserWindow, ipcMain } = require('electron')
const threads = require('./threads/main')
data = {}

/* -- Create the window -- */
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

/* -- Send message to elf thread -- */
ipcMain.on('agregar_duende',(event, args) => {
    if(!data.semaforo)
        threads.nuevo_duende({message: 1})
})

/* -- Send message to reindeer thread -- */
ipcMain.on('agregar_reno', (event, args) => {
    if(!data.semaforo)
        threads.nuevo_reno({message: 1})
})

/* -- Send update tho main thread -- */
ipcMain.on('actualizar', (event, args) => {
    event.reply('actualizar',data)
})

/* -- Close app -- */
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') 
        app.quit()
})

/* -- Open app -- */
app.on('ready', () => {
    createWindow()
})

/* -- Update data -- */
function actualizar() {
    data = threads.cantidad()
}
setInterval(actualizar, 1000)