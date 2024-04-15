const path = require("path");

// Rigth click on the rile in vs code then copy path and paste inside it.
// console.log(path.dirname("E:\Node Js\Node Js\PathModule\index.js"));


// console.log(path.extname("E:\Node Js\Node Js\PathModule\index.js"));


// console.log(path.extname("E:\Node Js\Node Js\PathModule\index.js"));


// console.log(path.basename("E:\Node Js\Node Js\PathModule\index.js"));




// To get complete information
// console.log(path.parse("E:\Node Js\Node Js\PathModule\index.js"));

// To get single information
const single = path.parse("E:\Node Js\Node Js\PathModule\index.js");
console.log(single["ext"]);