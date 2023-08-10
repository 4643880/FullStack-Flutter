
import * as http from "http";
import * as url from "url";
import * as os from "os";
import * as fs from "fs";
import path from "path";
import {UserData} from "./users/user_data";
import {AppRouting} from "./routing/app_routing";
import {IncomingMessage, ServerResponse} from "http";
const hostName: string = "localhost";
const portNumber: number = 5000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    let _url = req.url;
    let queryParams = url.parse(_url!).query;
    let filterQuery= queryParams?.split("data_mongodb=?").pop()!.replaceAll("%22" , " ").replaceAll("%20", " ");


    let myPath = url.parse(_url!).path;
    AppRouting.appRouting(req,res);

    // res.end();
});

server.listen(portNumber, hostName, () => {
    console.log("Hello, server. Listening to the port number 5000");
    console.log(`http://${hostName}:${portNumber}`);
});