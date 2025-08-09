
const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/') {
        fs.readFile('01Form.html', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.write('<h1>404 Not Found</h1>');
            } else if (req.url === '/') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
            }   
            res.end();
        })
    }else if(req.method === 'POST'){
        let body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            bodydata = Buffer.concat(body).toString();
            console.log('Form Data Received:', querystring.parse(bodydata));
            console.log(typeof bodydata);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<h1>Form Submitted</h1>');
            res.end();
        });
    }


}).listen(5100);




// --------------------------------------------------------------------------------------------------------

// http.createServer((req, res) => {
//     fs.readFile('01Form.html', (err, data) => {
//         if (err) {
//             res.writeHead(404, { 'Content-Type': 'text/plain' });
//             res.write('<h1>404 Not Found</h1>');
//         } else if (req.url === '/') {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.write(data);
//         } else {
//             req.on('data', (chunk) => {
//                 const formData = querystring.parse(chunk.toString());
//                 console.log('Form Data Received:', formData);
//             });
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.write('<h1>Form Submitted</h1>');
//         }
//         res.end();
//     })
// }).listen(5100);