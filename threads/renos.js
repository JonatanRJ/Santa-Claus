/* -- Declare local variables -- */
let renos = 0

/* -- Message to reindeer thread -- */
process.on('message', (obj) => {
    //add reindeer
    if(obj.message == 1){
        //Reindeer less than 7
        if(renos < 6){
            renos++
            process.send({message:renos})
        }
        //Send message to Santa thread
        else{
            renos = 0
            process.send({message:renos, action:"repartir"})
        }
    }
})
