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