


import {MongoClient, Db} from "mongodb";

let mongoDb : Db;

export async function connectToDB() {
    const url : string = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(url);
    mongoDb = client.db("notes_app");
    console.log("Mongo DB Connected Successfully...");
}

export function getDatabase() : Db {
    return mongoDb;
}