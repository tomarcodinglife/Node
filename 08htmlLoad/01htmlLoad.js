
const http = require("http");
const fs = require("fs");


http.createServer((request, response) => {
    fs.readFile('web.html', (error, data) => {
        if (error) {
            response.writeHead(404,{ 'Content-Type': 'text/html' });
            response.write('<h1>404 Not Found</h1>');
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data);
        }
        response.end();
    })

}).listen(4100)
