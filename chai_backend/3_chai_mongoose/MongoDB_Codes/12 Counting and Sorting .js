// Connecting to Mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/BravoDB")
.then( () => console.log("Connection Successfully"))
.catch( (err) => console.log(err));



//  Schema Starts Here
// We use schema to define the structure and validators 
const myAizazDataSchema = new mongoose.Schema({
    name: {
        type : String,
        require: true
    },
    type: String,
    active: Boolean,
    videos: Number
});



// Model Starts Here
// Model is a Wrapper on the Mongoose Schema
// It will create collection
const MyModelClass = new mongoose.model("Bravodata", myAizazDataSchema);




// Inserting Documents Without Async Await
// Insereting Document 
// const insertingDocument = new MyModelClass({
//     name: "NodeJs",
//     type: "Backend",
//     active: true
// });

// insertingDocument.save();





// Inserting Documents With Async Await
const createDocumentFunc = async() => {
    try{

        // Insereting Document 
        const insertingDocument1 = new MyModelClass({
            name: "NodeJs",
            type: "Backend",
            active: true, 
            videos: 80
        });

        const insertingDocument2 = new MyModelClass({
            name: "Express",
            type: "Backend",
            active: true, 
            videos: 75
        });

        const insertingDocument3 = new MyModelClass({
            name: "JavaScript",
            type: "Frontend",
            active: true, 
            videos: 70
        });

        const insertingDocument4 = new MyModelClass({
            name: "React Js",
            type: "Frontend",
            active: true, 
            videos: 60
        });

        const result = await MyModelClass.insertMany(
            [insertingDocument1, insertingDocument2, insertingDocument3, insertingDocument4]
            );

        console.log(result);

    }
    catch(err){
        console.log(err);
    }

}
// createDocumentFunc();






// Reading Document Starts Here It return promise that's why we sue async await
// const readmydocument = async() => {
//     try{
//         const resultOfRead = await MyModelClass
//         .find({type : "Frontend"}, {_id : 0})
//         .limit(1)
//         .select({name : 1})
//         console.log(resultOfRead);
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// readmydocument();




// MongoDB Comparison Operators Starts Here It return promise that's why we sue async await

// $gt , $gte , $lt, $lte, $eq, $ne, $in, $nIn

// Example No 1
// const readmydocument = async() => {
//     try{
//         const resultOfRead = await MyModelClass
//         .find({videos: {$lte : 75}}, {_id : 0})
//         .limit(5)
//         .select({name : 1})
//         console.log(resultOfRead);
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// readmydocument();

// Example No 2
// const readmydocument = async() => {
//     try{
//         const resultOfRead = await MyModelClass
//         .find({type: {$in : ["Backend"]}}, {_id : 0})
//         .limit(5)
//         .select({name : 1})
//         console.log(resultOfRead);
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// readmydocument();






// MongoDB Logical Operators
// $and , $or, $not , $nor
// const readmydocument = async() => {
//     try{
//         const resultOfRead = await MyModelClass.find({
//             $and : [
//                 {type: {$eq : "Backend"}},{videos : {$lt: 77}}
//             ]
//         });
//         console.log(resultOfRead);
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// readmydocument();




// Counting and Sorting MongoDB
const readmydocument = async() => {
    try{
        const resultOfRead = await MyModelClass.find({
            $or : [
                {type: {$eq : "Backend"}},{videos : {$lt: 77}}
            ]
        }, {_id: 0})
        .select({name: 1})
        // .count()
        .sort({name: -1}); /* 1 ascending or -1 descending*/
        console.log(resultOfRead);
    }
    catch(err){
        console.log(err)
    }
}
readmydocument();



