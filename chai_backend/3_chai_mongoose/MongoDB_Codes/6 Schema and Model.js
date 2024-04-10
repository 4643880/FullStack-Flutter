// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/alpha")
// .then(() => console.log("Connection Successfully"))
// .catch((err) => console.log(err));


// Connecting to Mongoose
const mongoose = require("Mongoose");
 mongoose.connect("mongodb://localhost:27017/AlphaDB")
 .then( () => console.log("Connection Successfully"))
 .catch( (err) => console.log(err));


//  Schema Starts Here
// We use schema to define the structure and validators 
 const aizazdataSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    type: String,
    active: Boolean
})


// Model Starts Here
// Model is a Wrapper on the Mongoose Schema
// It will create collection
const PlaylistClass =  new mongoose.model("aizazdata", aizazdataSchema)


mongoose.model()