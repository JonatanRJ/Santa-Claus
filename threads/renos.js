/* -- Declare variable local -- */
let renos = 0

/* -- Mensaje de los hilos de los renos -- */
process.on('message', (obj) => {
    //Agregar reno
    if(obj.message == 1){
        //Cuando sean menos de 7 renos
        if(renos < 6){
            renos++
            process.send({message:renos})
        }
        //Enviar mensaje de santa a los renos
        else{
            renos = 0
            process.send({message:renos, action:"repartir"})
        }
    }
})
