const http = require('http');
const fs = require('fs');
const path = require('path');

// Header file ek baar read
const servercode = 3958
const headerHTML = fs.readFileSync("pages/header.html", "utf-8");

http.createServer((request, response) => {
    let filePath = request.url === "/" ? "pages/index.html" : "pages" + request.url;

    // Agar extension missing hai to .html add karo
    if (!path.extname(filePath)) {
        filePath += ".html";
    }

    const ext = path.extname(filePath);
    let contentType = "text/html";

    if (ext === ".css") contentType = "text/css";
    if (ext === ".js") contentType = "application/javascript";

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            if (err.code === "ENOENT") {
                response.writeHead(404, {"Content-Type": "text/plain"});
                response.end("404 Not Found");
            } else {
                response.writeHead(500, {"Content-Type": "text/plain"});
                response.end("Internal Server Error");
            }
        } else {
            if (contentType === "text/html") {
                data = headerHTML + data; // Header add
            }
            response.writeHead(200, {"Content-Type": contentType});
            response.end(data);
        }
    });

}).listen(servercode, () => {
    console.log(`Server running on http://localhost:", ${servercode}`);
});