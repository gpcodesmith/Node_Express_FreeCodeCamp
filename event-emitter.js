//on - listen for an event
//enit - emit an event
const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name,id)=>{
    console.log(`response event triggered ${name} with ${id}`);
})

customEmitter.on('response', ()=>{
    console.log('Some Logic Event triggered');
})

customEmitter.emit('response','john',34);

//The Orderr of emitt and on method matters;
// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance

