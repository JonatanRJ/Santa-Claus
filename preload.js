const {ipcRenderer} = require('electron')

window.addEventListener("DOMContentLoaded", () => {
    duendes = document.getElementById("btn_duende")
    renos = document.getElementById("btn_reno")
    cnt_duendes = document.getElementById("cnt_duende")
    cnt_renos = document.getElementById("cnt_reno")

    duendes.addEventListener("click",() => {
        ipcRenderer.send("agregar_duende")
    })

    renos.addEventListener("click",() => {
        ipcRenderer.send("agregar_reno")
    })

    ipcRenderer.on('actualizar', (event, args) => {
        cnt_duendes.innerHTML = args.duendes
        cnt_renos.innerHTML = args.renos
    })

    function actualizar(){
        ipcRenderer.send("actualizar")
    }

    setInterval(actualizar,1000)

    actualizar()
});
