 const mongoose = require("Mongoose");
 mongoose.connect("mongodb://localhost:27017/alpha")
 .then( () => console.log("Connection Successfully"))
 .catch( (err) => console.log(err));