
// import userData from './userData.js';

const userData = require('./userData.js');
const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(userData));
    response.end();


}).listen(4100)

