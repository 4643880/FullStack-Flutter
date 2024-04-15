const os = require("os");


// Checking Archetectur 32 bit or 64 bit
// const result = os.arch()
// console.log(result);

// Checking Free memory in bytes
// const result = os.freemem()
// console.log(result);


// Checking Free memory in GB
// const result = os.freemem()
// console.log(`${result}` / 1024 / 1024 /1024);


// Checking Total memory in GB
// const result = os.totalmem()
// console.log(`${result}` / 1024 / 1024 /1024);


// Checking Host Name
// const result = os.hostname()
// console.log(result);


// Checking Host Name
// const result = os.platform()
// console.log(result);


// Checking Host Name
const result = os.type()
console.log(result);