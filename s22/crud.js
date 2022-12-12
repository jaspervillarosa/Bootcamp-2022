const http = require('http')
const port = 4000

// create a mock data 

let directory = [

    {
        name: "Jann Dave Apohin",
        email: "jann@mail.com"
    },

    {
        name: "Ralph Ocba",
        email: "ralph@mail.com"
    },


]

http.createServer((req, res) => {

    //endpoint - /users

    if (req.url == '/users' && req.method == 'GET'){

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(directory))
        //converts it into string
        res.end();
    }

    //endpoint - /users
    // method - POST
    //response is to return the data that us being inserted in our mock data array
    //however we must insert the data frist in the mock array

    if (req.url == '/users' && req.method == 'POST'){

        let reqBody = ""
        req.on("data", (data) => {

            reqBody += data; 
        });

        req.on("end", () => {

            // parse reqBody to Javascript object so that we can insert it to the mock database 

            reqBody = JSON.parse(reqBody);
            directory.push(reqBody);


            //now that we successfuly added our object into the array we will not send a response back to the client
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.write(JSON.stringify(directory))
            res.end();
        });
    }

}).listen(port);

console.log(`Server is connected at Localhost: ${port}`)