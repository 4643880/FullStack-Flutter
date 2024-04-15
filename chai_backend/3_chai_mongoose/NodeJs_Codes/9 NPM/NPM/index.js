// => Step 1 npm init  I have to initialize it will create package.json
// => Step 2 npm install chalk for color console Add type in package.json "type": "module",
// => Step 3 npm install validator 
// => 

// Works with ES
import chalk from 'chalk';
import validator from 'validator';


// Works with JavaScript 
// const chalk = require("chalk");
// const validator = require("validator");

console.log(chalk.blue('Hello world!'));

console.log(chalk.italic("Hey"));

console.log(chalk.bgRed("Hello World"));

console.log(chalk.bgBlack.white("Hello World"));

console.log(chalk.bgGreen.white.underline("Hello World"));


console.log(chalk.bgGreen.white("----------------------------------------"));



//--------------------------------------------------------

const res = validator.isEmail("aizazgmail.com");
console.log(res ? chalk.bgGreen(res) : chalk.bgRed(res));