const add = (num1, num2) => {
    return num1 + num2;
}


const subtract = (num1, num2) => {
    return num1 - num2;
}


function multiply(num1, num2){
    result = num1 * num2;
    return result;
}

const name = "Aizaz";

// Example No. 1
// module.exports.add = add;
// module.exports.subtract = subtract;
// module.exports.name = name;


// Example No. 2
module.exports = {add, subtract, name}


// If you have only one function in the file for the export then you can use example 3 otherwise you have to use example 1
// Example No. 3
// module.exports = add;