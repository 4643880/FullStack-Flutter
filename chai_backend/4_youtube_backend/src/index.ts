
import { app } from "./app";
import { connectToDB } from "./db/mongo_db_client";


connectToDB().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Connected to port: ${process.env.PORT}`);
    });
}).catch((err) => {
    console.error("Error: ", err);
});