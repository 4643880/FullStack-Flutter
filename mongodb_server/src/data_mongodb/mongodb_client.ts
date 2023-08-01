

import 'mongodb';
import {Db, MongoClient} from "mongodb";

let mongodb : Db;


export async function connectToDatabase() {
    const url: string = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(url);
    mongodb = client.db("socialMedia");
}

export function getDatabase(): Db {
    return mongodb;
}