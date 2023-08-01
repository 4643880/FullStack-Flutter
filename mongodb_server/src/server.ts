


import express, {Express} from 'express';
import user_routing from "./routing/user_routing";
import appLogger from "./app_logger/app_logger";
import {connectToDatabase, getDatabase} from "./data_mongodb/mongodb_client";

const hostName = 'localhost';
const app = express();
const portNumber = 5000;

// Accepting json data_mongodb
app.use(express.json());
app.use(appLogger);



app.use("/v1/api/user", user_routing);


app.listen(portNumber, hostName, async() => {
    await connectToDatabase();
    getDatabase();
    console.log(`Welcome to express server...`);
    console.log(`DB Connected Successfully...`);
    console.log(`http://${hostName}:${portNumber}/v1/api/user`);
})

