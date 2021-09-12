const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter { }

//Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Eventti Tapahtuu!'));

//Init event
myEmitter.emit('event');