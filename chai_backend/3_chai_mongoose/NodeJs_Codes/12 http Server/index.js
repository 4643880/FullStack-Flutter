//=> Creating Our own web server 
//=> PHP uses apache  and asp.net uses IIS

//=> But when we work in the Node js we don't need third party server we can easily create our own web server.

//=>


const http = require('http');

const server1 = http.createServer( function (){

});

// Call Back Function has two parameters request and response

// Request can be used to get information about current http request 
// e.g url , request header and data

// Request means google par search karna then google will response
const server = http.createServer( (req, res) => {
    res.end("Hello from the other side!");
});

// Get Local host number from google or Xamp server also provide it.
// Local Host Number 127.0.0.1
// Port number can be 8000 or any number
server.listen(9000, "127.0.0.1", () => {
    console.log("Listening to the port number 9000");
});

// Search it on the google http://localhost:9000/