import express, {response} from "express";
import {getDatabase} from "../data_mongodb/mongodb_client";
import {ObjectId} from "mongodb";

const user_routing = express.Router();


user_routing.post("/addNewUser", async (req: express.Request, res: express.Response, next) => {
    let db = getDatabase();
    let body = req.body;

    let userCollection = db.collection("users");

    const data = await userCollection.insertOne(body);
    res.status(200).json({
        "response": data
    });

    res.end();
});

user_routing.get("/readUsers", async (req: express.Request, res: express.Response) => {
    let db = getDatabase();

    let userCollection = db.collection("users");
    let users = await userCollection.find({}).toArray();

    res.status(200).json({
        "users": users
    })

    res.end();
});


user_routing.put("/updateUser", async (req: express.Request, res: express.Response) => {
    let db = getDatabase();
    let body = req.body;
    let userCollection = db.collection("users");

    const userObject = {
        name: body.name,
        email: body.email,
        followers: body.followers,
        following: body.following,
        accountType: body.accountType,
        interest: body.interest,
    };
    let users = await userCollection.updateOne({_id: new ObjectId(body.userId)}, {$set: userObject});

    res.status(200).json({
        "users": users
    })

    res.end();
});


user_routing.delete("/deleteUser", async (req: express.Request, res: express.Response) => {
    let db = getDatabase();
    let body = req.body;
    let userCollection = db.collection("users");
    let users = await userCollection.deleteOne({_id : new ObjectId(body.userId)});

    res.status(200).json({
        "users": users
    })

    res.end();
});


// Profile
user_routing.get("/getProfile:/id", async (req: express.Request, res: express.Response) => {

    let userId = req.params.userId;
    let db = getDatabase();

    let userCollection = db.collection("users");
    let users = await userCollection.find({"_id": new ObjectId(userId)}).toArray();

    res.status(200).json({
        "users": users
    })

    res.end();
});
export default user_routing;