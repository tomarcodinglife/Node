
const http = require('http');

http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write(`
         
               <html> 
                <head>
                    <title>Server Response Example</title>
                </head>

                <body>
                    <h1>Hello World Sujit Tomar. <br> <br/> I am learning again Node.js</h1>
                    <p>This is a simple server response example.</p>
                </body>
               </html>

        
        `)
    response.end('');
    // process.exit(0); // Exit the process after sending the response
}).listen(4500);  // Server listens on port 4848 [run command: node 01createServer.js]


