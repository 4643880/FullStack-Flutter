


import * as http from "http";
import * as url from "url";
import * as os from "os";
import * as fs from "fs";
import path from "path";
import {UserData} from "./users/user_data";


const hostName: string = "localhost";
const portNumber: number = 5000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    let _url = req.url;
    let queryParams = url.parse(_url!).query;
    let filterQuery= queryParams?.split("data=?").pop()!.replaceAll("%22" , " ").replaceAll("%20", " ");


    let myPath = url.parse(_url!).path;
    if(myPath == "/users"){
        res.write(`
            <h1>All Users</h1>            
        `);
    }else if(myPath == "/data"){
        res.write(`
            <h1>Data</h1>            
        `);
    }else if(myPath == "/posts"){
        res.write(`
            <h1>Posts</h1>            
        `);
    }else if(myPath == "/os"){
        let osMap = {
            osMemory : os.totalmem(),
            homedir : os.homedir(),
            freeMemory: os.freemem(),
            sysName: os.hostname(),
        }
        res.write(`
            <h2>${JSON.stringify(osMap)}</h2>
        `);
    }else if(myPath == "/fs"){
        fs.readFile(
            path.join(__dirname, "users_response.json",),
            (err, data) => {

            console.log(err);
            console.log(data.toString());

            if(err){
                res.write(`
                    <h1>${err}</h1>            
                `);
            }
            res.write(`<pre>${data.toString()}</pre>`);
            res.end();
        });
    } else if(myPath == "/createUser") {
        let user = new UserData();
        let result = user.createUser("Aizaz");
        res.write(`
            <h2>${result}</h2>
        `);
        res.end();
    }else if(myPath == "/getUsers"){
        let user = new UserData();
        let result = user.getAllUsers();
        res.write(`
            <pre>${result}</pre>
        `);
        res.end();
    }else{
        res.write(`
            <h1>Path Not Found</h1>            
        `);
        res.end();
    }

    // res.end();
});

server.listen(portNumber, hostName, () => {
    console.log("Hello, server. Listening to the port number 5000");
    console.log(`http://${hostName}:${portNumber}`);
});