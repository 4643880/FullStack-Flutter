


import express, {Express} from 'express';
import user_routing from "./routing/user_routing";
import post_routing from "./routing/post_routing";
import appLogger from "./app_logger/app_logger";

const hostName = 'localhost';
const app = express();
const portNumber = 5000;

// Accepting json data_mongodb
app.use(express.json());
app.use(appLogger);



app.use("/v1/api/user", user_routing);
app.use("/v1/api/post", post_routing);


app.listen(portNumber, hostName, () => {
    console.log(`Welcome to express server routing optimization...`);
    console.log(`http://${hostName}:${portNumber}/v1/api/user`);
})

