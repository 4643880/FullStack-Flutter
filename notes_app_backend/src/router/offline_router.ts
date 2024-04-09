


import express  from "express";
import { OfflineController } from "../controller/offline_controller";

const offline_router : express.Router = express.Router();
offline_router.post("/addNote", OfflineController.addNote);
offline_router.get("/getNotes", OfflineController.getAllNotes);

export default offline_router;