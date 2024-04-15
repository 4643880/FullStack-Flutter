//=> () this is grouping operatotor
//=> 
//=>
//=>


// When we write this kind of the normal code behind the scene node wrap it into a anonymous function which is in the grouping operator that's why our variables are private by default 
// const name = 'Aizaz';
// console.log(name);


// Anonymous Function declaring in the grouping operator
// (function (exports, require, module, __filename, __dirname){
//     const name = 'Aizaz';
//     console.log(name);

//     module.exports.name = name;
    
// });



// IIFE Immediately Invoked Function Expression 
(function (){
    const name = 'Aizaz';
    console.log(name);    
    
})(); //At the end two prethenthesis ()


//Note: We don't write Module Wrapper Function Node Automatically write it behind the scene
// These Parameter are available in the Module Wrapper Function 
// __filename, __dirname, module , export , require 
console.log(__dirname);
console.log(__filename);