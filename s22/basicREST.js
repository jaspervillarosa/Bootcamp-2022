const http = require('http')
const port = 4000;

http.createServer((req, res) => {

    // console.log("hello");

    //establish the endpoint profile
    //http method - GET

    if(req.url == '/profile' &&  req.method == 'GET'){

        res.writeHead(200, {"Content-Type" : "text/plain"})
        res.end("Welcome to My Page")
    }

    else if (req.url == '/profile' && req.method == 'POST'){

        res.writeHead(200, {"Content-Type" : "text/plain"})
        res.end("Data to be send to the Database")
    }
    
    else {
        res.writeHead (404, {'Content-Type': 'text/plain'})
        res.end("Request cannot be completed")
    }
}).listen(port);

console.log(`Server is connected at localhost: ${port}`)