
const path = require('path')
const file = "files/sujit.txt"
 
console.log(path.dirname(file))  // files
console.log(path.extname(file))  // .txt
console.log(path.basename(file))  // sujit.txt
console.log(path.resolve("files", 'sujit.txt')) // d:\SKS\learning\Node\files\sujit.txt