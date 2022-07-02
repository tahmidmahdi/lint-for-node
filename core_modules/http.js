// can communicate with network
const http = require('http');

// its a object which is a event emitter, that means it has on, listen
// also can create multiple servers :P
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello Server');
        res.write('How are you');
        res.end();
    } else if (req.url === '/about') {
        res.write('This is about us page');
        res.end();
    } else {
        res.write('Not found');
        res.end();
    }
});

// .listen holds the event loop and never let event loop go out
server.listen(3000);

console.log('listening on port 3000');
