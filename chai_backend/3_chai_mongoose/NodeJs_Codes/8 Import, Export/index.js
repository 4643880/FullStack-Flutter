

// Example No. 1
const data = require("./operator")
console.log(data.name);
console.log(data.add(5,5));
console.log(data.subtract(10,5));




// Example No. 2
const {name, add, subtract} = require("./operator")
console.log(name);
console.log(add(5,5));
console.log(subtract(10,5));