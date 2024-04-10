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
    active: Boolean
});



// Model Starts Here
// Model is a Wrapper on the Mongoose Schema
// It will create collection
const MyModelClass = new mongoose.model("Bravodata", myAizazDataSchema);






// Inserting Documents Without Async Await
// Insereting Document 
const insertingDocument = new MyModelClass({
    name: "NodeJs",
    type: "Backend",
    active: true
});

insertingDocument.save();





// Inserting Documents With Async Await
const createDocumentFunc = async() => {
    try{

        // Insereting Document 
        const insertingDocument = new MyModelClass({
            name: "NodeJs",
            type: "Backend",
            active: true
        });

        const result = await insertingDocument.save();
        console.log(result);

    }
    catch(err){
        console.log(err);
    }

}
createDocumentFunc();