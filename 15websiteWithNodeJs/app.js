
const http = require('http');
const fs = require('fs');
const { error } = require('console');

http.createServer((request, response) => {

    const commonHeadeData = fs.readFileSync("pages/header.html", "utf-8")

    // ------------------

    let file = "/index"

    if(request.url != "/"){
        file = request.url;
    }

    console.log("pages"+file+".html")

    if(request.url != '/style.css') {
        fs.readFile("pages"+file+".html", 'utf-8', (err, data) => {
            if(err){
                response.writeHead(500, {"Content-Type": "text/plain"});
                response.end("Internal Server Error");
                return false
            }else {
                response.writeHead(200, {"Content-Type" : "text/html"});
                response.write(commonHeadeData+" "+data);
                response.end();
            }
        })

    }else if (request.url === '/style.css') {
        fs.readFile('pages/style.css', 'utf-8', (err, data) => {
            if(err) {
                response.writeHead(500, {"Content-Type": "text/plain"});
                response.end("Internal Server Error");
                return;
            }else {
                response.writeHead(200, {"Content-Type" : "text/css"});
                response.write(data);
                response.end();
            }
        })
    }else{
        response.writeHead(404, {"Content-Type" : "text/plain"});
        response.end("404 Not Found");
    }

}).listen(3590)



