
const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        fs.readFile('01Form.html', (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type':'text/plain'});
                res.write('<h1>404 Not Found</h1>');
            }else {
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data);
            }
            res.end();
        })
    }else if (req.method === 'POST') {
        let body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        // folder check
        if(!fs.existsSync('file')){
            fs.mkdirSync('file');
        }  

        // Responding to the client
        req.on('end', () => {
            let bodyData = Buffer.concat(body).toString();
            bodyData = querystring.parse(bodyData);
            
            console.log('Form Data Received:', bodyData);
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write('<h1>Form Submitted</h1>');
            res.end();
        });
    }

}).listen(3535)