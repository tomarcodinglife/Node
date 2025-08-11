
const fs = require("fs");

console.log(process.argv); // this is current file arguments
const operation = process.argv[2]; // this is get operation from arguments

if(operation === 'write') {
    const fileName = process.argv[3]; // this is get file name from arguments
    const content = process.argv[4]; // this is get content from arguments
    const filePath = "file/" + fileName + ".text"; // this is the path of the file
    fs.writeFileSync(filePath, content); // this is write file through fs.writeFileSync
    console.log("File created successfully" + fileName + " with content: " + content + " in current directory");
}else if(operation === 'read') {
    const fileName = process.argv[3]; // this is get file name from arguments
    const filePath = "file/" + fileName + ".text"; // this is the path of the file
    const data = fs.readFileSync(filePath, 'utf-8'); // this is read file through fs.readFileSync
    console.log("File content: " + data); // this is log file content
}else if(operation === 'update'){
    const fileName = process.argv[3]
    const filePath = "file/" + fileName + ".text";
    const content = process.argv[4]
    let method = fs.appendFileSync(filePath, content)
    console.log(method)
}else if (operation === 'delete') {
    const fileName = process.argv[3]
    const filePath = "file/" + fileName + ".text";
    let method = fs.unlinkSync(filePath)
    console.log(fileName + " deleted ", " File Path is ", filePath)
}else {
    console.log("Operation Not Found")
}

// To use the file system module, we need to import it
// const fs = require("fs"); // this is file system module

// File operations



const path = require("path");
const filePath = path.join(__dirname, "file", "tomar.text"); // this is the path of the file


// file creation
// fs.writeFileSync(filePath, " hi my self Sujit Kumar Singh") // this is created file through fs.writeFileSync

// file deletion
// fs.unlinkSync(filePath) // this is deleted file through fs.unlinkSync

// file reading
// const data = fs.readFileSync(filePath, 'utf-8'); // this is read file through fs.readFileSync
// console.log(data);

// file update
// fs.writeFileSync(filePath, " hi my self Sujit Tomar") // this is updated file through fs.writeFileSync

// file rename
// fs.renameSync(filePath, path.join(__dirname, "file", "sujit.text")) // this is renamed file through fs.renameSync

// file append
// fs.appendFileSync(filePath, " this is updated line") // this is append file through fs.appendFileSync

// // file stat
// const stats = fs.statSync(filePath); // this is get file stats through fs.statSync
// console.log(stats);

// file exists
// const exists = fs.exists ? fs.existsSync(filePath) : fs.existsSync(filePath); // this is check file exists through fs.existsSync
// console.log(exists ? "File exists" : "File does not exist");

// file directory creation
// const dirPath = path.join(__dirname, "file", "newDir"); // this is the path of the directory
// if (!fs.existsSync(dirPath)) { // this is check directory exists
//     fs.mkdirSync(dirPath); // this is create directory through fs.mkdirSync
//     console.log("Directory created");
// } else {
//     console.log("Directory already exists");
// }

// file directory deletion
// const dirPath = path.join(__dirname, "file", "newDir"); // this is the path of the directory
// if (fs.existsSync(dirPath)) { // this is check directory exists
//     fs.rmdirSync(dirPath); // this is delete directory through fs.rmdirSync
//     console.log("Directory deleted");
// } else {
//     console.log("Directory does not exist");
// }

// file directory reading
// const dirPath = path.join(__dirname, "file"); // this is the path of the directory
// const files = fs.readdirSync(dirPath); // this is read directory through fs.readdirSync
// console.log(files);
// file directory stats
// const dirPath = path.join(__dirname, "file"); // this is the path of the directory
// const stats = fs.statSync(dirPath); // this is get directory stats through fs.statSync
// console.log(stats);

// file directory exists
// const dirPath = path.join(__dirname, "file"); // this is the path of the directory
// const exists = fs.existsSync(dirPath); // this is check directory exists through fs.existsSync
// console.log(exists ? "Directory exists" : "Directory does not exist");   
// file directory rename
// const dirPath = path.join(__dirname, "file", "newDir"); // this is the path of the directory
// if (fs.existsSync(dirPath)) { // this is check directory exists
//     fs.renameSync(dirPath, path.join(__dirname, "file", "renamedDir")); // this is rename directory through fs.renameSync
//     console.log("Directory renamed");
// } else {
//     console.log("Directory does not exist");
// }

// file directory append
// const dirPath = path.join(__dirname, "file", "newDir"); // this is the path of the directory
// if (!fs.existsSync(dirPath)) { // this is check directory exists
//     fs.mkdirSync(dirPath); // this is create directory through fs.mkdirSync
//     fs.appendFileSync(path.join(dirPath, "newFile.txt"), "This is a new file in the new directory"); // this is append file through fs.appendFileSync
//     console.log("Directory created and file appended");
// } else {
//     console.log("Directory already exists");
// }
// file directory copy
// const dirPath = path.join(__dirname, "file", "newDir"); // this is the path of the directory
// if (fs.existsSync(dirPath)) { // this is check directory exists
//     fs.cpSync(dirPath, path.join(__dirname, "file", "copiedDir"), { recursive: true }); // this is copy directory through fs.cpSync
//     console.log("Directory copied");
// } else {
//     console.log("Directory does not exist");
// }

// file directory move
// const dirPath = path.join(__dirname, "file", "newDir"); // this is the path of the directory
// if (fs.existsSync(dirPath)) { // this is check directory exists
//     fs.renameSync(dirPath, path.join(__dirname, "file", "movedDir")); // this is move directory through fs.renameSync
//     console.log("Directory moved");
// } else {
//     console.log("Directory does not exist");
// }

// file directory watch
// const dirPath = path.join(__dirname, "file"); // this is the path of the directory
// fs.watch(dirPath, (eventType, filename) => { // this is watch directory through fs.watch
//     if (filename) {
//         console.log(`File ${filename} has been ${eventType}`); // this is log file event
//     } else {
//         console.log("File event occurred");
//     }
// }); // this is watch directory through fs.watch

// file directory unlink
// const dirPath = path.join(__dirname, "file", "newDir"); // this is the path of the directory
// if (fs.existsSync(dirPath)) { // this is check directory exists
//     fs.rmdirSync(dirPath, { recursive: true }); // this is unlink directory through fs.rmdirSync
//     console.log("Directory unlinked");
// } else {
//     console.log("Directory does not exist");
// }

// file directory stat
// const dirPath = path.join(__dirname, "file"); // this is the path of the directory
// const stats = fs.statSync(dirPath); // this is get directory stats through fs.statSync
// console.log(stats);

// file directory exists
// const dirPath = path.join(__dirname, "file"); // this is the path of the directory
// const exists = fs.existsSync(dirPath); // this is check directory exists through fs.existsSync
// console.log(exists ? "Directory exists" : "Directory does not exist");   
