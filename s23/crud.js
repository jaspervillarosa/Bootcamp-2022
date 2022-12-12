const express = require ('express')
const app = express();
const PORT = 4000;

//create a middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//Routes
    //endpoints
    //request listener
    //http mehods

app.get('/', (req, res) => {

    res.send('Wecome to my Homepage');

})

app.post('/login', (req, res) => {

    let name = req.body.name;
    res.send(`${name} successfully logged in`)
})

let users = [];
app.post('/signup' , (req, res) => {

    let name = req.body.name;
    let password = req.body.password;

    if (name !== "" && password !== ""){

        users.push(req.body);
        res.send(`User ${name} is successfully registered`);
    }

    else {

        res.send (`Please fill out the complete information`)
    }
})

//update password - put method
app.put ('/change-password', (req, res) => {

    let message ="";

    for (let i = 0; i< users.length; i++){

        if (req.body.name == users[i].name){

            users[i].password = req.body.password
            message = `User ${req.body.name}'s password has been updated`
        }

        else {

            message = "User doesnt exist"
        }

        console.log(users)
        res.send(message);
    }
})

app.listen(PORT)

console.log(`Server is runnig at PORT: ${PORT} `)