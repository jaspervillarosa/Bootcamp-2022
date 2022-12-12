//CRUD Operations

//Create 
    //insertOne() - it inserts one document at a time
    //insertMany() - it insert mulitple documents at a time

    /*

        Syntax: 

        db.collectionName.insertOne({object})

        - Javascript Comparison
        - object.objectName.method({object})

    */

db.users.insertOne(
    {

        firstName: "Jane",
        lastName: "Doe",
        age: 22,
        contact: {

            phone: "09684277632",
            email: "janedoe@mail.com"

        },

        courses: ["CSS", "JS", "PHP"]
    }
)

/*
    insertMany()

    Syntax: 
    db.collectionName.insertMany([{objectA}, {objectB}])
*/

db.users.insertMany(

    {
        firstName: "Albrecht",
        lastName: "Rawr",
        age: 22,

        contact: {

            phone: "09973787836",
            email: "arawr@mail.com"

        },

        courses: ["Python", "React", "PHP"],
        department: "Department of Agriculture"
    },
    
    {
        firstName: "Neil",
        lastName: "Armstrong",
        age: 78,

        contact: {

            phone: "088-813-1496",
            email: "arawr@mail.com"

        },

        courses: ["Laravel", "React", "SaSS"],
        department: "Department of Agriculture"
    }
)

//Read/Update

/*
    Syntax:
    -db.collectionName.find()
    -db.collectionName.find({field:value});
*/

db.users.find() 
//it returns all documents

//using a single query
db.users.find({firstName: "Stephen"})
// case sensitive 
//it returns document/s that passes the query/filter

db.users.find({

    lastName: "rawr",
    age: 22
})
//using mulitple query parameters
//this will depend on the key value pairs to be exact

//update()
/*
    db.collectionName.updateOne(
        {criteria},
        {
            $set:
                {field:value}
        }
    );
    db.collectionName.updateMany();
*/

db.users.insertOne({

    firstName: "Admin",
    lastName: "Admin",
    age: 0,
    contact: {
        phone: "000000",
        email: "admin@gmail.com"
    },
    courses: [],
    department: "none"
})

//update  a signle document
db.users.updateOne(
    {
    //criteria
    firstName: "Test"
    },
    {
        $set: {
            firstName: "Bill",
            lastName: "Gates",
            age: 22,
            contact: {
                phone: "123456",
                email: "bgates@mail.com"
            },
            courses: ["PHP", "ReactJS"],
            department: "Operaions",
            status: "active"
        }
    }
)

//Exercise 1: Update the document with firstname " Jane" with field department value: "none"
//use updateOne() method

db.users.updateOne(
    {
        firstName: "Jane"
    },
    {
        $set: {

            department: "none"
        }
    }
)

//update mulitple documents at once
/*
    Syntax: db.collectionName.updateMany ({criteria}, {$set: {field:value}})

*/



db.users.updateMany (
    {
        department: "none"
    },
    {
        $set: {
            department: "HR"
        }
      
    }
)

db.users.insertOne({

    firstName: "Admin",
    lastName: "Admin",
    age: 0,
    contact: {
        phone: "000000",
        email: "admin@gmail.com"
    },
    courses: [],
    department: "none"
})


//replacing the whole document if necessary
db.users.replaceOne(
    {
        firstName: "Admin"
    },
    {
        firstname: "Billy",
        lastName: "Crow",
        age: 36,
        contact: {
            phone: "324235",
            email: "bcrow@gmail.com"
        },
        courses: ["ReactJS", "NodeJS", "ExpressJS"],
        department: "Finance"
    }
)

//Exercise 2: Update status field of Bill Gates, you will use the keyword $unset
//method - updateOne()
//status was removed if $unset
db.users.updateOne(
    {
        firstName: "Bill"
    },
    {
        $unset: {

            status: "none"
        }
    }
)

//Delete
//be careful
    //deleteOne()
    //deleteMany()

/*
    Syntax:
    db.collectionName.deleteOne({criteria})
*/

//create a dafault doc
db.users.insertOne({

    firstName: "Admin1",
    lastName: "Admin1",
    age: 0,
    contact: {
        phone: "000000",
        email: "admin@gmail.com"
    },
    courses: [],
    department: "HR"
})

//delete the default
db.users.deleteOne(
    {
        firstName: "Admin1"
    }
)

// add back the deleted data in the HR department
db.users.insertMany(
    [
        {
            firstName: "Jane",
            lastName: "Doe",
            age: 22,
            contact: {
    
                phone: "09684277632",
                email: "janedoe@mail.com"
    
            },
    
            courses: ["CSS", "JS", "PHP"],
            department: "HR"

        },

        {
            firstName: "Josh",
            lastName: "Tangerine",
            age: 22,
            contact: {
    
                phone: "096634343",
                email: "jtangerine@mail.com"
    
            },
    
            courses: ["CSS", "JS", "PHP"],
            department: "HR"

        }, 

        {
            firstName: "Stephen",
            lastName: "Hawking",
            age: 52,
            contact: {
    
                phone: "87654321",
                email: "jtangerine@mail.com"
    
            },
    
            courses: ["CSS", "JS", "PHP"],
            department: "HR"

        }, 
    ]
)

//Advance Queries
    //Retrieving data with complex data sructures is also a good skill for a developer to have
    //real world examples of data can be as complex having more layrs of nested objects and arrays
    //Learning to query these kins of data is essenti t ensure that we are able to retrieve any info thtwe would need in our app

//Exercise 3: Retrieve document that has phone number 87654321
//query on nested fields

db.users.find(
    
    "contact.phone" = "87654321"
    
)

//ganito dapat ilagay lahat if ganito ang format
db.users.find(
    {
        contact: 
            {
              phone: "096634343",
              email: "jtangerine@mail.com"
            }
    }
)

//Querying on array without regard to order
//React, Python
//$all
db.users.find(

    {
        courses: {
            $all: ["React", "PHP"] 
        }
    }
)
//pwede ito