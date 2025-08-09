
const http = require("http");
const fs = require("fs");

http.createServer((request, response) => {
    if(request.method === 'GET' && request.url === '/') {
        fs.readFile('012Form.html', (error, data) => {
            if (error) {
                response.writeHead(404, { 'Content-Type': 'text/html' });
                response.write('<h1>404 Not Found</h1>');
            } else if(request.url === '/') {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.write(data);
            }
        response.end();
        })
    }else if(request.method === 'POST'){
        let body = [];
        request.on('data', (chunk) => {
            body.push(chunk);
        });
        request.on('end', () => {
            let bodyData = Buffer.concat(body).toString();
            console.log('Form Data Received:', bodyData);
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write('<h1>Form Submitted</h1>');
            response.end();
        });
    }

}).listen(4800)