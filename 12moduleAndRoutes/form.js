
function form (request, response ) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(`

         <form action="/submit" method="POST">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>

            <br>
            <br>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>

            <br>
            <br>

            <button type="submit">Submit</button>

            <br>
            <br>

        </form>
        
        `);
    response.end();
}

module.exports = form;