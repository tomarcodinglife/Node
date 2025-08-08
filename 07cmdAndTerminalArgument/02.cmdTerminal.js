
const http = require('http');

const args = process.argv;
console.log(args[2])

http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.end()
}).listen(4100)