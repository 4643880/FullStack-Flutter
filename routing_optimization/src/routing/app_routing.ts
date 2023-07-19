import * as http from "http";
import {IncomingMessage, ServerResponse} from "http";
import os from "os";
import fs from "fs";
import path from "path";
import {UserData} from "../users/user_data";
import * as url from "url";


export class AppRouting {
    static appRouting(req: IncomingMessage, res: ServerResponse,) {

        let _url = req.url;
        let myPath = url.parse(_url!).path;
        let method = req.method;

        if (myPath == "/users" && method == "GET") {

            res.write(`
            <h1>All Users</h1>        
                
        `);
        } else if (myPath == "/data" && method == "GET") {

            res.write(`
                <h1>Data</h1>    
            `);

        } else if (myPath == "/posts" && method == "GET") {

            res.write(`
                <h1>Posts</h1>            
            `);

        } else if (myPath == "/os" && method == "GET") {

            let osMap = {
                osMemory: os.totalmem(),
                homedir: os.homedir(),
                freeMemory: os.freemem(),
                sysName: os.hostname(),
            }

            res.write(`
                <h2>${JSON.stringify(osMap)}</h2>
            `);

        } else if (myPath == "/fs" && method == "GET") {

            fs.readFile(
                path.join(__dirname, "users_response.json",),
                (err, data) => {

                    // console.log(err);
                    // console.log(data.toString());

                    if (err) {
                        res.write(`
                    <h1>${err}</h1>            
                `);
                    }
                    res.write(`<pre>${data.toString()}</pre>`);
                    res.end();
                });


        } else if (myPath == "/createUser" && method == "POST") {

            let body : any = "";
            req.on("data", (chunk: any) => {

                body += chunk;

            }).on("end", () => {

                let jsonResponse = JSON.parse(body);
                console.log(body);
                res.end(`<h1 style="color: green">${jsonResponse.name} created Successfully...</h1>`);


            });


            // let user = new UserData();
            // let result = user.createUser("Aizaz");
            // res.write(`
            //     <h2>${result}</h2>
            // `);

        } else if (myPath == "/getUsers" && method == "GET") {

            let user = new UserData();
            user.getAllUsers(respnose => {

                res.write(`
                    <pre>${respnose}</pre>
                `);
                res.end();

            });

        } else if (myPath == "/login" && method == "POST") {
            let body : any = "";
            req.on("data", (chunk) =>{
                body += chunk;

            }).on("end", () => {
                let jsonResponse = JSON.parse(body);
                if(jsonResponse.email == "ali@gmail.com" && jsonResponse.password == "1234"){
                    res.end(`<h1>User LoggedIn Successfully</h1>`);
                }else{
                    res.end("Incorrect Credentials");
                }
                // console.log(body);
                // console.log(jsonResponse);

            });

        } else {
            res.write(`
            <h1>Path Not Found</h1>            
        `);
            res.end();
        }
    }
}
