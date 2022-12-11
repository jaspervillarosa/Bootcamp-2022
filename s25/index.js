const { response } = require('express');
const express = require('express');
const app = express();
const PORT = 4000;
const mongoose = require('mongoose');

//middlewares

app.use(express.json());
app.use(express.urlencoded({extended:true}));


// connect server to MongoDb atlas
// login to MongoDb atlas 
// click connect 
//choose connect to your application

mongoose.connect('', 
{useNewUrlParser: true, useUnifiedTopology: true});

// useNewUrlParser flag - allows users to fall back to the old parser if they finds a bug in the new parser 

// you should useNewUrlParser: true unless there are instances that prevents you to connect 

// useUnifiedTopology: default is false
//set to true to opt in using MongoDb driver's new connection mangament engine

//get a notif if successfully connected or not
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once('open', () => console.log("connected to the database"));

//creation of schema 
    //schema it defines how data is organize within a relational database.
    // it includes logical constraints such as table names, fields, data types, and the relationship between the entities. 

const taskSchema = new mongooose.Schema(
    // create an object here 
    {
        name: String,
        status: {
            type: String,
            default: pending,

        }

    }
);

const Task = mongoose.model("Task", taskSchema);

// Routes 

/*
    Business logic
    1. add a functionality to check if there are duplicate task
        -if the task already exists in the database, we return an error
        -if the task doesnt exist in the database, we add it in the database
    2. The task will be coming from the request's body
    3. Create a new Task object with a "name" field property.
    4. The "status" property does not need to be provided because our schema default is pending upon creation of the project
*/

app.post('/task', (req,res) => {

    Task.findOne(

        // create an object 
        {name:req.body.name},
        (err, result) => {

            if (result != null && result.name == req.body.name){

                return response.send("Duplicate task found!");

            }
            else {
                let newTask = new Task({

                    // create another object 
                    name:req.body.name
                });

                newTask.save((err, saveTask) => {
                    if (err){

                        return console.error(err)
                    }

                    else {

                        return res.send("New Task Created");
                    }
                });

            }
        }
            )
});

/*

    BUSINESS LOGIC
    1. Retrieve all documents
    2. If an error is encountered, print the error
    3. If no errors are found, send back to the client/postman
*/

app.get('/tasks', (req,res) => {

        // Model method 

        Task.find({}, (error, result) => {

            if (error){
                return console.log(error)
            }
            else {
                return res.send(result);
            }
        });
});