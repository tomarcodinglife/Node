
console.log("argv", process.argv); // Outputs the command line arguments
console.log("cwd",process.cwd());// Outputs the current working directory
console.log("env", process.env); // Outputs the environment variables
console.log("execPath",process.execPath);  // Outputs the path to the Node.js executable
console.log("pid",process.pid); // Outputs the process ID
console.log("plateform",process.platform); // Outputs the platform Node.js is running on
console.log("uptime",process.uptime()); // Outputs the system uptime in seconds
console.log("version",process.version); // Outputs the Node.js version
console.log("arch",process.arch); // Outputs the architecture of the Node.js binary
console.log("memoryUsage",process.memoryUsage()); // Outputs memory usage statistics
console.log("title",process.title); // Outputs the process title
console.log("exitCode",process.exitCode); // Outputs the exit code of the process
console.log("hrtime",process.hrtime()); // Outputs high-resolution real time
console.log("nextTick",process.nextTick); // Outputs the next tick function
console.log("release",process.release); // Outputs the Node.js release information
console.log("version",process.versions); // Outputs the versions of Node.js and its dependencies
console.log("config",process.config); // Outputs the Node.js configuration