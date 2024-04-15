
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants";

dotenv.config({path: './.env'});


const app = express();


export async function connectToDB() : Promise<void> {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URL}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
    }catch(error){
        console.error("Mongodb connection error: ", error);
        process.exit(1);
    }
}

