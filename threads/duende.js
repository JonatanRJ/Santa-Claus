/* -- Declare local variables -- */
let duendes = 0

/* -- Message to elf thread -- */
process.on('message', (obj) => {
    //add elf
    if(obj.message == 1){
        //Elf less than 3
        if(duendes < 2){
            duendes++
            process.send({message:duendes})
        }
        //Send message to Santa thread
        else{
            duendes = 0
            process.send({message:duendes, action:"regalos"})
        }
    }
})
