
const http = require("http");
const fs = require("fs");
const path = require("path");


http.createServer((req, res) => {
    fs.readFile('form.html', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('<h1>404 Not Found</h1>');
        } if(req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
        }else{
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<h1>Form Submitted</h1>');
        }
    
        res.end();
    })
    
}).listen(5100);