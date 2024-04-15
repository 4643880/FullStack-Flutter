// --------------------Challenge-------------------
// 1: Create a folder named it Aizaz
// 2: Create a file in it named bio.txt and data into it
// 3: Add more data into the file at the end of existing data
// 4: Read the data without getting buffer data at first
// 5: Rename the file to mybio.txt 
// 6: Now delete both file and folder


const fs = require("fs")
// fs.mkdirSync("Aizaz")

// fs.writeFileSync("Aizaz/bio.txt", "How are you?")

// fs.appendFileSync('./bio.txt', '\n I am fine. this is a abook')


// const result = fs.readFileSync("Aizaz/bio.txt", "utf-8")
// console.log(result)

// fs.renameSync("Aizaz/bio.txt", "Aizaz/mybio.txt")

// fs.unlinkSync("./mybio.txt")

fs.rmdirSync("Aizaz")
