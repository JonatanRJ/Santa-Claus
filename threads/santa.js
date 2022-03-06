let dormido = 0

process.on('message', async (obj) => {
    if(obj.action == "regalos"){
        dormido = 1
        console.log("Santa ayuda a los duendes a crear regalos")
    }
    else if(obj.action == "repartir"){
        dormido = 1
        console.log("Santa va a repartir regalos")
    }
    dormido = 0
})