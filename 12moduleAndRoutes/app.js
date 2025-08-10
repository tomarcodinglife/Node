

const form = require('./form.js');
const submitPage = require('./submitPage.js');


const http = require('http');

http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        form(req, res);

    } else if (req.method === 'POST' && req.url === '/submit') {
        submitPage(req, res);
    }else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h1>404 Not Found</h1>');
        res.end();
    }

}).listen(4100)