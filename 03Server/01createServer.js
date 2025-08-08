
const http = require('http');

http.createServer((req, res) => {

    res.write("<h1>Hello World Sujit Tomar. <br> <br/> I am learning again Node.js</h1>");

    res.end('Hello World');
}).listen(4848);  // Server listens on port 4848 [run command: node 01createServer.js]