// --------------------Challenge With Asyncronous-------------------
// 1: Create a folder named it Aizaz
// 2: Create a file in it named bio.txt and data into it
// 3: Add more data into the file at the end of existing data
// 4: Read the data without getting buffer data at first
// 5: Rename the file to mybio.txt 
// 6: Now delete both file and folder

const { Console } = require("console");
const fs = require("fs");


// Call back function for the Asyncronous 
// (err) => {
// }


// const fs = require('fs')
// fs.mkdir("Aizaz",(err) => {
//     console.log("Folder Has Created");
// });



// fs.writeFile("./bio.txt", "This is my bio data", (err) => {
//     console.log("File Has Created Successfully");
// });


// fs.appendFile("./bio.txt", "This is more data", (err) => {
//     console.log("Data Has Appended");
// });


// Buffer data yani binary data ko string main get karnay kay liay utf-8 use hota ha
// fs.readFile("./bio.txt", "utf-8", (err, data)=>{
//     console.log(data);
// });



// fs.rename("./bio.txt", "./mybio.txt", (err) => {
//     console.log("File name has changed");
// });



// fs.unlink("./mybio.txt", (err) => {
//     console.log("Deleted Successfully");
// });


// fs.rmdir("./Aizaz", (err) => {
//     console.log("Folder Deleted");
// });





// -------------------------Following is Syncronous File System ---------------------------------

// const fs = require("fs")
// fs.mkdirSync("Aizaz")

// fs.writeFileSync("Aizaz/bio.txt", "How are you?")

// fs.appendFileSync('./bio.txt', '\n I am fine. this is a abook')


// const result = fs.readFileSync("Aizaz/bio.txt", "utf-8")
// console.log(result)

// fs.renameSync("./bio.txt", "Aizaz/mybio.txt")

// fs.unlinkSync("./mybio.txt")

// fs.rmdirSync("Aizaz")
