const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello From Server');
        res.end();
    } else if (req.url === '/about') {
        res.write('Its about page');
        res.end();
    } else {
        res.write('Not found');
        res.end();
    }
});

server.listen(3000);
console.log('listening on port 3000');
