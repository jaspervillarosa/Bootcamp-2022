console.log("connected");

//step 1: node js an postman installation
//link: https:/nodejs.prg/en
//it is recommented to use LTS (Long time support)
//Link for Postman: https//www.postman.com/downloads

// step 2: create a require function -- similar to script tag
let http = require('http');

// step 3: use createServre() method 
// we can create HTTP server that listens to request on a specified port and gives back response for the client
http.createServer(function (req, res){

    //req - messges sent by the client
    //response - answer that was sent by the server
    //clients (FE) and servers (NodeJS, expressJS application) communicate by exchanging individual messages.

    // step 4: create a writeHead 
    res.writeHead( 200, {'Content-Type': 'text/plain'});
    //writeHead() - sets the status code for the response 200 (which means success/ok)
    // set the content type as aplain text message

    res.end('Fuck me');
    // it terminates the reponse process

}).listen(4000); // the server will be assigned to port via the method listen
