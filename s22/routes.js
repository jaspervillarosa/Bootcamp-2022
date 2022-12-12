const http = require('http');
const port = 4000;
//it create a variable port to store the port number

const server = http.createServer((req, res) => {
    // create an endpoint to start routing process

    if (req.url == '/greeting'){
        //url - it is a property that refers to the url or the link to the browser

        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end("this is my greeting page");
    }

    else if (req.url == '/homepage'){

        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end("home page")
    }

    else {
        res.writeHead (404, {'Content-Type': 'text/plain'})
        res.end("Page unavailable")
    }
})

server.listen(port)
console.log(`Server is connected at local host: ${port}`)

//how to access the endpoint? http://localhost:4000/<endpoint>