

const http = require('http');

http.createServer((request, response) => {
    response.setHeader("Content-Type", "text/html");

    if (request.url=== '/'){
        response.write ('<h1>Welcome to the Home Page</h1>');
    }else if (request.url === '/about'){
        response.write('<h1>About Us</h1>');
    }else if (request.url === '/contact'){
        response.write('<h1>Contact Us</h1>');
    }else if (request.url === '/user'){
        response.write('<h1>User Profile</h1>');
    }else{
        response.write('<h1>Other Page</h1>');
    };

    response.end('')
}).listen(3600)