/* -- Declare local variables -- */
let semaforo = 0

/* -- Message on Santa thread -- */
process.on('message', async (obj) => {
    //Change Santa semaphore
    semaforo = 1
    //Sent info tho do gifts
    if(obj.action == "regalos"){
        process.send({message:semaforo, action:"regalos"})
    }
    //Sent info to share gifts
    else if(obj.action == "repartir"){
        process.send({message:semaforo,action:"repartir"})    
    }
    //Change semaphore after 30 seconds
    setInterval(actualizar, 30000) 
})

/* -- Function to change semaphore -- */
function actualizar() {
    semaforo = 0
    process.send({message:semaforo,action:"dormir"})
}
