let renos = 0

process.on('message', (obj) => {
    if(obj.message == 1){
        if(renos < 6){
            renos++
            process.send({message:renos})
        }
        else{
            renos = 0
            process.send({message:renos, action:"repartir"})
        }
    }
})
