const EventEmitter = require('events');
const uuid = require('uuid');

console.log(uuid.v4());

class Logger extends EventEmitter {
    log(msg) {
        //Kutsu eventtiä
        this.emit('message', { id: uuid.v4(), msg });
    }
}

module.exports = Logger;