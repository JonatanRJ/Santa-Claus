/* -- Declaracion de la variables globales -- */
let semaforo = 0

/* -- Mensaje de Santa con los hilos -- */
process.on('message', async (obj) => {
    //Cambio del semaforo de Santa
    semaforo = 1
    //Enviar informacion para hacer los regalos
    if(obj.action == "regalos"){
        process.send({message:semaforo, action:"regalos"})
    }
    //Enviar informacion para enviar los regalos
    else if(obj.action == "repartir"){
        process.send({message:semaforo,action:"repartir"})    
    }
    //Cambiar el semaforo cada 30 segundos
    setInterval(actualizar, 30000) 
})

/* -- Funccion para cambiar el semaforo -- */
function actualizar() {
    semaforo = 0
    process.send({message:semaforo,action:"dormir"})
}
