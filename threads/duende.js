/* -- Declaracion de las variables globales -- */
let duendes = 0

/* -- Mensaje del hilo de los elfos/duendes -- */
process.on('message', (obj) => {
    //Sumar duende
    if(obj.message == 1){
        //Cuando sean menos de 3 duendes
        if(duendes < 2){
            duendes++
            process.send({message:duendes})
        }
        //Enviar mensaje al hilo de Santa
        else{
            duendes = 0
            process.send({message:duendes, action:"regalos"})
        }
    }
})
