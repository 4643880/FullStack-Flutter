
import express from 'express';
import cors from 'cors'; // Cross Origin Resource Sharing
import appLogger from "./middleware/app_logger";
import {connectToDB} from "./config/mongo_db_client";
import app_logger from "./middleware/app_logger";
import user_Router from "./router/user_router";
import offline_router from './router/offline_router';
const app : express.Application = express();

app.use(cors()); // will handle the requests from other origins
app.use(express.json()); // will parse in comming requests to json
app.use(app_logger);
// We'll accept the data from url, will accept incomming data from url
app.use(express.urlencoded({extended: false}));
app.use("/v1/api/user", user_Router);
app.use("/v1/api/offline_testing", offline_router);


const hostName = 'localhost';
const portNumber = 5000;


app.listen(portNumber, hostName, async () => {
    await connectToDB();
    console.log("Welcome to Notes App Backend Service");
})
