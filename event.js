const EventEmitter = require('events');
const fs = require('fs');

const emitter = new EventEmitter();
// register a lister for bell ring event
emitter.on('bellRing', (period) => {
    console.log(`we need to run because ${period}`);
});

// raise an event
// we can also send params
//  if multiple params then send it as object
emitter.emit('bellRing', 'second period ended');
 event.on('ramShortage',(params) => {
    console.log('Hurry ${params}');
 })
if (os.freemem < 7.9 gb ) {
    event.emit('ramShortage', 'Free some space')
}