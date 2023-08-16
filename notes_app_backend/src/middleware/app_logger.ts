

import express from "express";


let appLogger = (req: express.Request, res: express.Response, next: express.NextFunction)=> {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const method = req.method;
    const url = req.url;

    console.log(`[Date : ${date}] | [Time : ${time}] | [Method : ${method}] | [Url : ${url}]`);
    next();
};

export  default  appLogger;