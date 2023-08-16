import express, {NextFunction, response} from "express";
import {getDatabase} from "../config/mongo_db_client";
import {User} from "../models/user_model";
import bcrypt from 'bcrypt';
import {ObjectId} from "mongodb";

export class UserController {

    static async signin(req: express.Request, res: express.Response) {
        let db = getDatabase();
        let userCollection = db.collection("users");
        const user : User = req.body;

        const checkUserInDb = {
            "email": user.email,
        };

        const result = await userCollection.find(checkUserInDb).toArray();
        const userInformationData = result[0];
        if(result.length != 0){
            const passwordBool = await bcrypt.compare(user.password, userInformationData.password);
            if(user.email == userInformationData.email && passwordBool){
                userInformationData.password = "";
                res.status(200).json({
                   "status": "success",
                   "response": userInformationData,
                });
            }else{
                res.status(403).json({
                    "status" : "Failure",
                    "response" : "Invalid Email or Password",
                });
            }
        }else{
            res.status(403).json({
                "status" : "Failure",
                "response" : "Invalid Email or Password",
            });
        }

    }
    static async signup(req: express.Request, res: express.Response){
        let db = getDatabase();
        let userCollection = db.collection("users");
        const user : User = req.body;

        const checkUserInDb = {
            "email": user.email,
        };

        const result = await userCollection.find(checkUserInDb).toArray();
        if(result.length != 0){
            res.status(403).send({
                "status" : "Failure",
                "response" : "Email Already Exists",
            });
        }else{
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
            const responseData = await userCollection.insertOne(user);

            const objectId = responseData.insertedId;
            const userInfo = await userCollection.find({_id: new ObjectId(objectId)}).toArray();
            const userInformationData = userInfo[0];
            userInformationData.password = "";



            res.status(200).send({
                "status" : "success",
                "response": userInformationData,
            });

        }
    }
}