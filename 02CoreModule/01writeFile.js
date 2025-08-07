
const fs = require('fs');
const filePath = 'example.txt';

const content = "Hello, this is a test file.\nThis file is created using Node.js.";

fs.writeFileSync(filePath, content, (err) => {
    if (err) {
        console.error("Error writing to file:", err);
    } else {
        console.log("File written successfully.");
    }
});