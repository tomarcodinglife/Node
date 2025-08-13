# 05_node.js

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
