// this is an exercise 

db.users.find (
    {
        firstName: {$regex: "S", $options: "i"},
        lastName: {$regex: "D", $options:"i"}
    },
    {
        firstName: 1, lastName: 1, _id:0
    }
)

//READ operation
//Query operators
//Comparison operators

//greater than
db.users.find(
    {
        age: 
        {
            $gt: 20
        }
    }
)

//greater than or equal
db.users.find(
    {
        age: 
        {
            $gte: 20
        }
    }
)


// equal
db.users.find(
    {
        age: 
        {
            $eq: 20
        }
    }
)

// equal wihout eq keyword
db.users.find(
    {
        age: 20
        
    }
)

//less than 

db.users.find (
{
    age:
    {
        $lt: 53
    }
}
    
)

//less than 

db.users.find (
    {
        age:
        {
            $lte: 36
        }
    }
        
     
 )

 //in keyword

 db.users.find(
    {
        lastName:
        {
            $in: ["Tangerine", "Crow"]
        }
    }
 )

 //Exercise 4: Search courses with HTML and React
// it will find either both the query or at least 1 of the query item
 db.users.find(

    {
        courses:
        {
            $in: ["React", "NodeJS"]
        }
    }
 )

 //Logical operators
 //or

 db.users.find(

    {
        $or: 
        [
            {firstName: "Neil"}
        ]
    }
 )

  //or
//this work
  db.users.find(

    {
        $or: 
        [
            {firstName: "Neil"},
            {firstName: "Albrecht"}
        ]
    }
 )

 //$and operator
 //age not equal to 22
 //phone number 123456789

 db.users.find(

    {
        $or: 
        [
                {age: {$ne: 22}},
                {age: {$ne: 86}},
                {"contact.phone": "123456789"}
            
        ]
    }
 )

 //try to omit $or
 //if this is the case, it needs to be that everything is present and no doubles
 db.users.find(

    {
                age: {$ne: 22},
                age: {$ne: 86},
                "contact.phone": "123456789"
            
    }
 )

 //Field Projection
 db.users.find(
    
    {firstName: "Jane"},
    {firstName: 1,_id:0}

)
//returns the name, lastname, id, contact

db.users.find(
    
    {firstName: "Jane"},
    {
        _id:1,
        firstName: 1,
        lastName: 1,
        "contact.phone": 1
    }

)


//Query operator
    //$regex
db.users.find(
    {
        firstName: {$regex: "A", $options: '1'}
    }
)

//Exercise 5:
/*
    Find the users with letter "B" in their firstname and "C" in their lastname
    this is not case sensitive
    show only the first and last name
*/
//this work return bill gates and billy crow info
db.users.find(
{
    $or:
    {
        firstName: 
        {
            $regex: "B",
            $options: '1'
        },
        lastName:
        {
            $regex: "C",
            $options: '1'
        }
    }
}
  
)