import { getDatabase } from "../config/mongo_db_client";

import express, { response } from "express";
import { Note } from "../models/notes_model";
import { Collection, ObjectId } from "mongodb";

export class OfflineController {
    static async addNote(req : express.Request, res : express.Response) {
        let db = getDatabase();
        let note_collection = db.collection("offline_notes");

        let note : Note = req.body;

        let responseData = note_collection.insertOne(note);
        let objectId = (await responseData).insertedId;
        const  noteInformationData = await note_collection.find({_id : new ObjectId(objectId)}).toArray();
        const result = noteInformationData[0];


        res.status(200).send({
            "status": "success",
            "response" : result,
        });
        
    }   
    static async getAllNotes(req : express.Request, res : express.Response) {
        try {
            const db = getDatabase();
            const note_collection = db.collection("offline_notes");
        
            const responseData = await note_collection.find().toArray();
            console.log(responseData);
            // console.log("reached here");
            if (responseData.length == 0) {
              // Handle case when there are no notes found
              res.status(404).send({
                status: "error",
                message: "No notes found",
              });
            } else {
              res.status(200).send({
                status: "success",
                response: responseData,
              });
            }
          } catch (error) {
            console.error(error);
            res.status(500).send({
              status: "error",
              message: "An error occurred while fetching notes",
            });
          }
        
    }   
}