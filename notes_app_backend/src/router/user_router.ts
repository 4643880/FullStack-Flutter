

import express from "express";
import {UserController} from "../controller/user_controller";

const user_Router : express.Router = express.Router();


user_Router.post("/signup", UserController.signup);
user_Router.post("/signin", UserController.signin);
export default user_Router;

