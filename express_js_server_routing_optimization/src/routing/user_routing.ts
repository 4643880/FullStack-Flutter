


import express, {response} from "express";
import appLogger from "../app_logger/app_logger";
const user_routing = express.Router();
import bcrypt from 'bcrypt';
import { body, validationResult, ValidationChain } from 'express-validator';


// // User Routing level Middleware
// user_routing.use((req : express.Request, res : express.Response, next: express.NextFunction) => {
//     console.log(new Date().toLocaleDateString());
//     console.log(new Date().toLocaleTimeString());
//     console.log(req.method);
//     next();
// });


user_routing.get('/', (req : express.Request, res : express.Response) => {
    res.status(200);
    res.send('<h1>Welcome to Express Server Get Method!</h1>'); // send is used for html response
})

user_routing.post('/create', (req : express.Request, res : express.Response) => {
    res.status(200);
    res.send('<h1>Welcome to Express Server Post Method!</h1>'); // send is used for html response
})

user_routing.put('/update', (req : express.Request, res : express.Response) => {
    res.status(200);
    res.send('<h1>Welcome to Express Server Put Method!</h1>'); // send is used for html response
})
user_routing.delete('/delete', (req : express.Request, res : express.Response) => {
    res.status(200);
    res.send('<h1>Welcome to Express Server Delete Method!</h1>'); // send is used for html response
})


user_routing.post("/login", appLogger, (req: express.Request, res: express.Response) => {
    let body = req.body;
    console.log(body);
    if(body.email == "ali@gmail.com" && body.password == "1234"){
        console.log(body);
        res.status(200).json({
            "status": res.statusCode,
            "data": body,
            "msg": "Correct email password"
        });
    }else{
        res.status(401).json({
            "status": res.statusCode,
            "data": body,
            "msg": "Invalid email password"
        });
    }

});user_routing.post("/register",[
    body('email').not().isEmpty().isEmail().withMessage("email is required"),
    body('name').not().isEmpty().withMessage("name is required"),
], appLogger, async (req: express.Request, res: express.Response) => {
    let body = req.body;
    let {email, password, name} = req.body;

    let salt = await bcrypt.genSalt();
    let hashPassword = await bcrypt.hash(password, salt);

    let error = validationResult(req);

    if(!error.isEmpty()){
        res.status(400).json({
            "status": res.statusCode,
            "data": error,
        });
    }else{
        res.status(200).json({
            "status": res.statusCode,
            "data": body,
            "encryptedPassword": hashPassword,
            "msg": "your email password"
        });
    }






});
export default user_routing;