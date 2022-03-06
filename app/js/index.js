const ipc = require('electron').ipcRenderer;

duendes = document.getElementById("btn_duende")
renos = document.getElementById("btn_reno")
cnt_duendes = document.getElementById("cnt_duende")
cnt_renos = document.getElementById("cnt_reno")

duendes.addEventListener("click",() => {
    // window.ipcRenderer.send("agregar_duende")
})

renos.addEventListener("click",() => {
    val = parseInt(cnt_renos.textContent)
    console.log(val)
    val++
    console.log(val)
    cnt_renos.innerHTML = val
})

// ipcRenderer.on('actualizar', (event, args) => {
//     cnt_duendes.message = args.duendes
//     cnt_renos.message = args.renos
// })