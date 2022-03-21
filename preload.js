/* -- Import library -- */
const {ipcRenderer} = require('electron')

/* -- When DOM is ready -- */
window.addEventListener("DOMContentLoaded", () => {
    // Take all the elements from the DOM
    duendes = document.getElementById("btn_duende")
    renos = document.getElementById("btn_reno")
    cnt_duendes = document.getElementById("cnt_duende")
    cnt_renos = document.getElementById("cnt_reno")
    action = document.getElementById("action")
    santa = document.getElementById("img_santa")

    // Send message to elf thread
    duendes.addEventListener("click",() => {
        ipcRenderer.send("agregar_duende")
    })

    // Send message to reindeer thread
    renos.addEventListener("click",() => {
        ipcRenderer.send("agregar_reno")
    })

    // Update the DOM values and Santa semaphore
    ipcRenderer.on('actualizar', (event, args) => {
        cnt_duendes.innerHTML = args.duendes
        cnt_renos.innerHTML = args.renos
        
        if(args.action == "dormir"){
            action.style.display = "none"
            santa.src = "../assets/santa_dormido.png"
        }
        else if(args.action == "regalos"){
            action.style.display = "block"
            action.src = "../assets/regalos.png"
            santa.src = "../assets/santa_despierto.png"
        }
        else if(args.action == "repartir"){
            action.style.display = "block"
            action.src = "../assets/repartir.png"
            santa.src = "../assets/santa_despierto.png"
        }
    })

    // Update the data
    function actualizar(){
        ipcRenderer.send("actualizar")
    }
    setInterval(actualizar,1000)
    actualizar()
});
