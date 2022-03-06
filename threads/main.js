const { fork } = require('child_process')
const duende = fork('./threads/duende.js')
const renos = fork('./threads/renos.js')
const santa = fork('./threads/santa.js')

let cantidad_duendes = 0
let cantidad_renos = 0

duende.on('message', (obj) => {
    cantidad_duendes = obj.message
    if(obj.action == "regalos"){
        santa.send({action:"regalos"})
    }
})

renos.on('message', (obj) => {     
    cantidad_renos = obj.message
    
    if(obj.action == "repartir"){
        santa.send({action:"repartir"})
    }

})

module.exports = {
    nuevo_duende(){
        duende.send({message:1})
    },
    nuevo_reno(){
        renos.send({message:1})
    },
    cantidad(){
        return {duendes:cantidad_duendes,renos:cantidad_renos}
    }
}