
const querystring = require('querystring');

function submitPage (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    let body = [];

    req.on('data', (chunk) => {
        body.push(chunk);
    })

    req.on('end', () => {
        let bodyData = Buffer.concat(body).toString();
        bodyData = querystring.parse(bodyData);
        console.log('Form Data Received:', bodyData);

        res.write('<h1>Form Submitted</h1>');
        res.write(`<p>Username: ${bodyData.username}</p>`);
        res.write(`<p>Password: ${bodyData.password}</p>`);
        res.end();
    });

}

module.exports = submitPage;