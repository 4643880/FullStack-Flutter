const name = "Aizaz Haider";
console.log(name);

const fs = require('fs');

// fs.writeFileSync("myfile.txt", "Writing in the file");

// fs.writeFileSync("myfile.txt", "Hey, how are you");

// fs.appendFileSync("myfile.txt", "\nI am fine")

// const buf_data = fs.readFileSync("myfile.txt");
// console.log(buf_data);

// origional_data = buf_data.toString();
// console.log(origional_data);


// To rename the file
fs.renameSync("myfile.txt", "alpha.txt");