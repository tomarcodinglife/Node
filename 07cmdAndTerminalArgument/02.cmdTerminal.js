
const http = require('http');

const args = process.argv;

const port = args[2] || 4100;
console.log(".............", port[3])  // get server port number

http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write("<h1> Hello World</h1>");
    response.end()
}).listen(port) 