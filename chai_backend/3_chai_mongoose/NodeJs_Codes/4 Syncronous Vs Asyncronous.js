const fs = require('fs');

// const result = fs.readFileSync('read.txt', 'utf-8');
// console.log(result)

console.log('--------------------------------After Sync------------------------------------------')

// Async starts here

// Call back function for the Asyncronous 
// (err) => {
// }

// Buffer data yani binary data ko string main get karnay kay liay utf-8 use hota ha

fs.readFile("read.txt", "utf-8" , (err, data) => {
    console.log(data)
})

console.log('--------------------------------After Async------------------------------------------')
