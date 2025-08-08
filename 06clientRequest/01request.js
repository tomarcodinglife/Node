
const http = require('http');

http.createServer((request, response)=>{
    response.setHeader('Content-Type', 'text/html');

    console.log(request.method);  // get, post, put, delete
    console.log(request.url); // /api/user, /api/product
    console.log(request.headers.host); // localhost:5000

    response.write("<h1> Hello World</h1>");
    response.end()
}).listen(5000)