import express from "express";
import { UserController } from "../controllers/user_controller";

const user_router: express.Router = express.Router();

user_router.route("/register").post(UserController.register);

export default user_router;
