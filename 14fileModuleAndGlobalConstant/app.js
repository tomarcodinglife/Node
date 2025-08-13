
const path = require('path')
const file = "files/sujit.txt"

// Path Module
console.log(path.dirname(file))  // files
console.log(path.extname(file))  // .txt
console.log(path.basename(file))  // sujit.txt
console.log(path.resolve("files", 'sujit.txt')) // d:\SKS\learning\Node\files\sujit.txt
console.log(path.isAbsolute(file)) // false


// Global Constent
console.log(__dirname) // d:\SKS\learning\Node\14fileModuleAndGlobalConstant
console.log(__filename) // d:\SKS\learning\Node\14fileModuleAndGlobalConstant\app.js
