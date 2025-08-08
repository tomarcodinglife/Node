
const http = require('http');

http.createServer((req, res) => {

    res.write("<h1>Hello World Sujit Tomar</h1>");

    res.end('Hello World');
}).listen(4848);