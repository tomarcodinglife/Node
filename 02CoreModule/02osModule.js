

const OS = require('os');

console.log("platform", OS.platform()); // Outputs the OS platform
console.log("release", OS.release()); // Outputs the OS release version    
console.log("totalmem",OS.totalmem()); // Outputs the total memory in bytes
console.log("freemem",OS.freemem()); // Outputs the free memory in bytes
console.log("cpus",OS.cpus()); // Outputs information about the CPU cores
console.log("homedir",OS.homedir()); // Outputs the home directory of the current user
console.log("uptime",OS.uptime()); // Outputs the system uptime in seconds
console.log("networkInterfaces",OS.networkInterfaces()); // Outputs network interfaces information
console.log("tmpdir",OS.tmpdir()); // Outputs the temporary directory path
console.log("arch",OS.arch()); // Outputs the architecture of the operating system
console.log("hostname",OS.hostname()); // Outputs the hostname of the operating system
console.log("endianness",OS.endianness()); // Outputs the endianness of the CPU
console.log("constants",OS.constants); // Outputs the OS constants