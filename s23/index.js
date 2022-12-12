const express = require('express');
const app = express();
const PORT = 4000;

// create the middleware 

app.use(express.json())
//allows the server to handle data from the request
//it parses incoming request with JSON payload and is based on body parser

app.use(express.urlencoded({extended: true}));
//it allows the server to handle data from request coming from forms and tables
//it parses incoming request with JSON payload and is based on body parser

// create a routing (establish)
// server.method("endpoint", () => {})

app.get("/", (req, res) => {

    res.send("hello jasper")
})

app.get("/hello", (req, res) => {

    res.send(`Hello there, from the /hello endpoint `)
})

app.post("/greeting", (req, res) => {

    console.log(req.body)
    res.send(`Hello there, ${req.body.name}`)

});

app.listen(PORT, () => console.log ( `Server is running at port ${PORT}`));