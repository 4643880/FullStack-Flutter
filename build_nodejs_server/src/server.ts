


import * as http from "http";


const hostName: string = "localhost";
const portNumber: number = 5000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    res.write(`<h1>Hi, It's your node js server</h1><br><h2>Status: ${res.statusCode}</h2><br><h3>Method: ${req.method}</h3>`);
    res.end();
});

server.listen(portNumber, hostName, () => {
    console.log("Hello, server. Listening to the port number 5000");
    console.log(`http://${hostName}:${portNumber}`);
});