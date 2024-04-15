

const http = require("http");

//req.write and req.end both are same.

const server = http.createServer(
    (req, res) => {
        console.log(req.url);
        if (req.url == "/") {
            res.write("Writing the response.");
            res.end("Welcome to home page");
        } else if (req.url == "/contact") {
            res.end("This is contact page");
        }
        else if (req.url == "/about") {
            res.end("This is About Us page");
        } else {
            res.writeHead(404, "OOPs", {"content-type" : "text/html"} ); // Will print in console and network 
            res.write("This page does not exist \n"); 
            res.end("<h1>Something Went Wrong</h1>")
        }
    }
);

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to the port...");
}
);

// 100 - 200 Information response
// 200 - 300 Successful response
// 300 - 400 Redirect 
// 400 - 500 Clients Error
// 500 - 600 Server Error