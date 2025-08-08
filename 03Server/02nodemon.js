
const http = require('http');

http.createServer((req, res) => {
    res.write("<h1>Hello World Sujit Tomar. <br> <br/> I am learning again Node.js</h1>");
    res.end('Hello and Welcome to Node.js Server! with Nodemon');
}).listen(4848);  // Server listens on port 4848 [run command: node 01createServer.js]


http.createServer((req, res) => {
    res.write("<h1>Another Server Instance</h1>");
    res.end('This is another server instance running on the same port!');

}).listen(4800);  // This will not work as the port is already in use by the first server instance