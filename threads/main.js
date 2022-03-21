/* -- Import library -- */
const { fork } = require('child_process')

/* -- Declare threads -- */
const duende = fork('./threads/duende.js')
const renos = fork('./threads/renos.js')
const santa = fork('./threads/santa.js')

/* -- Declare local variables -- */
let cantidad_duendes = 0
let cantidad_renos = 0
let semaforo = 0
let action = "dormir"

/* -- Message from elf thread -- */
duende.on('message', (obj) => {
    cantidad_duendes = obj.message
    if(obj.action == "regalos"){
        santa.send({action:"regalos"})
    }
})

/* -- Message from reindeer thread -- */
renos.on('message', (obj) => {     
    cantidad_renos = obj.message
    if(obj.action == "repartir"){
        santa.send({action:"repartir"})
    }
})

/* -- Message from Santa thread -- */
santa.on('message', (obj) =>{
    semaforo = obj.message
    action = obj.action
})

/* -- Function to use in main app -- */
module.exports = {
    //Send message to elf
    nuevo_duende(){
        duende.send({message:1})
    },

    //Send message to reindeer
    nuevo_reno(){
        renos.send({message:1})
    },
    
    //Update local variables
    cantidad(){
        return {
            duendes : cantidad_duendes,
            renos : cantidad_renos,
            semaforo : semaforo,
            action : action
        }
    }
}