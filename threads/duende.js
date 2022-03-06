let duendes = 0

process.on('message', (obj) => {
    if(obj.message == 1){
        if(duendes < 2){
            duendes++
            process.send({message:duendes})
        }
        else{
            duendes = 0
            process.send({message:duendes, action:"regalos"})
        }
    }
})
