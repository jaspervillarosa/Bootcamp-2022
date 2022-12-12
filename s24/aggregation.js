/*
    Syntax:

    db.collectionName.aggregate(pipeline)
*/

db.fruits.insertMany(

    [
        {
            name: "Apple",
            color: "Red",
            stock: 20,
            price: 40,
            supplier_id: 1,
            onSale: true,
            origin: ["Philippines", "US"]
        },

        {
            name: "Mango",
            color: "Green",
            stock: 120,
            price: 300,
            supplier_id: 1,
            onSale: true,
            origin: ["Philippines", "US"]
        },
        {
            name: "Dragon Fruit",
            color: "Pink",
            stock: 25,
            price: 540,
            supplier_id: 1,
            onSale: true,
            origin: ["Philippines", "India"]
        }
    ]
)


//FIRST STAGE: Search for fruits documents that is onSale

db.fruits.aggregate (
    [
        {
            $match: {onSale: true}
        }
    ]
)

//SECOND STAGE: group those documents according to the supplier id and get the total value
//of stock


db.fruits.aggregate (
    [
        {
            $match: {onSale: true}
        },
        {
            $group:
            {
                _id: "supplier_id",
                total: {$sum: "$stock"}
            }
        }
    ]
)

//Third: exclude _id field
db.fruits.aggregate (
    [
        {
            $match: {onSale: true}
        },
        {
            $group:
            {
                _id: "supplier_id",
                total: {$sum: "$stock"}
            }
        },
         {
            $project: {id: 0}
         }  
    ]
)

//Fourth: Sort the total in ascending order
//it didnt work
db.fruits.aggregate (
    [
        {
            $match: {onSale: true}
        },

         {
            $project: {_id: 0}
         },
         {
            $sort: {total: 1}
         }
    ]
)