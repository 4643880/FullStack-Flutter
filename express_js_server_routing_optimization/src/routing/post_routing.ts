


import express from "express";
const post_routing = express.Router();

post_routing.get("/getPost/:id" ,(req: express.Request, res: express.Response) => {
    let id = req.params.id;
    console.log("PostId"+ id);
    res.status(200).send(`<h1>PostId ${id}</h1>`);
});
export default  post_routing;