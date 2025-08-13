# 05_node.js

## 🌐 Create a Server & Read/Write File in Node.js

यह example दिखाता है कि कैसे Node.js में एक HTTP server बनाया जाए और `fs` module का इस्तेमाल करके file read/write किया जाए।

### Example Code

```js
const http = require('http');
const fs = require('fs');

// Create HTTP Server
const server = http.createServer((req, res) => {
    if (req.url === '/write') {
        // Write to file
        fs.writeFile('example.txt', 'Hello from Node.js!', (err) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                return res.end('❌ Error writing file.');
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('✅ File written successfully.');
        });

    } else if (req.url === '/read') {
        // Read file
        fs.readFile('example.txt', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                return res.end('❌ Error reading file.');
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`📄 File Content: ${data}`);
        });

    } else {
        // Default Route
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome! Use /write to create a file and /read to read it.');
    }
});

// Start Server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
```


## "Node.js HTTP Server with Multiple Pages, Common Header, and CSS Support"

### 📂 Project Structure

```plaintext

project-folder/
│
├── server.js
├── pages/
│   ├── header.html
│   ├── index.html
│   ├── about.html
│   ├── contact.html
│   ├── style.css

```

### Code

```js

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

http.createServer((req, res) => {
    let filePath = '';
    let contentType = 'text/html';

    // Load common header
    const headerHTML = fs.readFileSync(path.join(__dirname, 'pages', 'header.html'), 'utf-8');

    if (req.url === '/' || req.url === '/index') {
        filePath = path.join(__dirname, 'pages', 'index.html');
    } 
    else if (req.url === '/about') {
        filePath = path.join(__dirname, 'pages', 'about.html');
    } 
    else if (req.url === '/contact') {
        filePath = path.join(__dirname, 'pages', 'contact.html');
    }
    else if (req.url === '/style.css') {
        filePath = path.join(__dirname, 'pages', 'style.css');
        contentType = 'text/css';
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Page Not Found');
        return;
    }

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            if (contentType === 'text/html') {
                res.write(headerHTML + data);
            } else {
                res.write(data);
            }
            res.end();
        }
    });

}).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

```

### Header File
``` html

<header style="background:#333;color:#fff;padding:10px;">
    <h1>My Website</h1>
    <nav>
        <a href="/" style="color:white;">Home</a> |
        <a href="/about" style="color:white;">About</a> |
        <a href="/contact" style="color:white;">Contact</a>
    </nav>
</header>
<hr>

```

### index File
``` html

<h2>Welcome to Home Page</h2>
<p>This is the main content of the website.</p>

```

### about File
``` html

<h2>About Us</h2>
<p>We are learning Node.js static file serving.</p>

```

### contact file

```html

<h2>Contact Us</h2>
<p>Email: contact@example.com</p>

```


### contact file
```css

body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 20px;
}
h2 {
    color: #333;
}

```

### Run Project

#### through node

```bash
node server.js

```

#### Run with Nodemon

##### Install nodemon globally (only first time):
```bash
    npm install -g nodemon
```

##### Start the server with nodemon:
```bash
    nodemon server.js
```




## 📂 File System Related Error Codes

| Error Code  | Meaning                       | When It Happens |
|-------------|------------------------------|-----------------|
| **ENOENT**  | No such file or directory    | Jab file/directory exist nahi karti. |
| **EACCES**  | Permission denied            | Jab file/directory par access permission nahi hota. |
| **EEXIST**  | File already exists          | Jab file/directory create karte time wo already exist kare. |
| **ENOTDIR** | Not a directory              | Jab path directory hona chahiye par file nikle. |
| **EISDIR**  | Is a directory               | Jab path file hona chahiye par directory ho. |
| **EMFILE**  | Too many open files          | Jab ek time par system me zyada files open ho jati hain. |
| **EBADF**   | Bad file descriptor          | Jab galat file descriptor ka use hota hai. |

---

## 🌐 Network Related Error Codes

| Error Code       | Meaning                         | When It Happens |
|------------------|--------------------------------|-----------------|
| **EADDRINUSE**   | Address already in use         | Jab server ka port already kisi aur process dwara use ho. |
| **ECONNREFUSED** | Connection refused             | Jab server request accept nahi karta. |
| **ECONNRESET**   | Connection reset by peer       | Jab connection abruptly close ho jata hai (server ya client). |
| **ETIMEDOUT**    | Connection timed out           | Jab network request ka response time se nahi milta. |
| **EHOSTUNREACH** | Host unreachable               | Jab destination host network me available nahi hai. |
| **ENETUNREACH**  | Network unreachable            | Jab destination network tak pahunch nahi ho rahi. |

---

## ⚙️ Process & System Related Error Codes

| Error Code  | Meaning                  | When It Happens |
|-------------|-------------------------|-----------------|
| **ENOMEM**  | Not enough memory       | Jab system memory khatam ho jaye. |
| **EFAULT**  | Bad address             | Jab invalid memory address access hota hai. |
| **ESRCH**   | No such process         | Jab diye gaye PID ka process exist nahi karta. |
| **EPIPE**   | Broken pipe             | Jab stream close hone ke baad usme likhne ki koshish ho. |
| **EINVAL**  | Invalid argument        | Jab kisi function ko galat argument diya jata hai. |
| **EPERM**   | Operation not permitted | Jab operation ke liye permission nahi hai. |

## 🛠 How to Handle Specific Errors in Node.js

Node.js में errors को handle करने के लिए आपको `try...catch` blocks (async/await के साथ) या callback में error parameter check करना होता है।

### Example: Handling File System Errors

```js
const fs = require('fs');

try {
    fs.readFileSync('data.txt', 'utf8');
    console.log('File read successfully');
} catch (err) {
    if (err.code === 'ENOENT') {
        console.error('❌ File not found. Please check the file path.');
    } else if (err.code === 'EACCES') {
        console.error('❌ Permission denied. Please check file permissions.');
    } else {
        console.error('⚠️ An unexpected error occurred:', err);
    }
}
```

### Example: Handling Network Errors

```js
const http = require('http');

const req = http.get('http://localhost:5000', (res) => {
    console.log(`✅ Status Code: ${res.statusCode}`);
});

req.on('error', (err) => {
    if (err.code === 'ECONNREFUSED') {
        console.error('❌ Connection refused. Is the server running?');
    } else if (err.code === 'ETIMEDOUT') {
        console.error('❌ Request timed out.');
    } else {
        console.error('⚠️ Network error:', err);
    }
});
```

### Example: Handling Process & System Errors

```js
try {
    process.kill(99999); // Invalid PID
} catch (err) {
    if (err.code === 'ESRCH') {
        console.error('❌ Process not found.');
    } else if (err.code === 'EPERM') {
        console.error('❌ Permission denied to kill the process.');
    } else {
        console.error('⚠️ System error:', err);
    }
}
```
