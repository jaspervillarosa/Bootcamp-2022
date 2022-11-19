console.log("connected");

let jasper = {

    grade: 1.25,
    subject: "Science 10",
    teacher: ["Jelly", "Santi"],
    school: {

        city: "Davao",
        country: "Phlippines",
    },


    classmates : [
        {
            name: "Beau",
            batch: 2
        },

        {
            name: "Sue",
            batch: 3,
        
        }

    ],

    description: function() {

        return `${this.subject}:${this.grade}`
    }
}

console.log(jasper.school);

console.log(jasper.description());

jasper.semester = "first";
console.log(jasper);

delete jasper.semester;
console.log(jasper);

let gino = {
    firstGrading: 95,
    subject: "English",
    teachers: ["Jelly", "Jem", "Joey"],
    isStudent:true,
    school: {
        city: "Manila",
        country: "Philippines"
    },
    classmates: [
        {
            name: "Dahl",
            batch: "26"
        },

        {
            name: "John Paul",
            batch: "5"
        },

        {
            name: "Jhyx",
            batch: "1"
        }
    ],

    description: function() {
        return `${this.subject}: ${this.firstGrading}`
    }
}

/*
    Q: How do we access properties in an object?
    //through dot (.) notation
    //through bracket ([""]) notation
    //objectName.propertyName
*/

console.log(gino.firstGrading);//95
//objectName.propertyName

console.log(gino.subject); //English

console.log(gino[`isStudent`]);
//true - returns a boolean

console.log(gino[`teachers`]);
//array of teachers

console.log(gino.teachers);
//even using dot notation it will still return the desired output

console.log(gino.teachers[1]);//outputs the index element Jem

console.log(gino.school); //objects

console.log(gino.school.city); //Manila
console.log(gino.school[`city`]);
console.log(gino [`school`][`city`]);

//Q: How to access school's country?
console.log(gino.school.country);
console.log(gino [`school`] [`country`]);

//Q: How to access the 2nd object of classmates?
console.log(gino[`classmates`][1]);

console.log(gino[`classmates`][1][`batch`]);


//Q: How do we access the function in the object?
console.log(gino.description);
//it displays the defined function but it did not exective the function.

console.log(gino.description());

//Q: How to add property in an object?
console.log(gino.semester); //undefined
gino.semester = "first";

console.log(gino);

//Removing a property in an object
delete gino.semester;
console.log(gino);


const studentGrades = [
    {
        studentId: 1,
        Q1: 89.3,
        Q2: 91.2,
        Q3: 93.3,
        Q4: 89.8

    },

    {
        studentId: 2,
        Q1: 69.2,
        Q2: 71.8,
        Q3: 76.5,
        Q4: 81.9

    },

    {
        studentId: 3,
        Q1: 95.7,
        Q2: 91.4,
        Q3: 90.7,
        Q4: 85.6

    },

    {
        studentId: 4,
        Q1: 86.9,
        Q2: 74.5,
        Q3: 83.3,
        Q4: 86.1

    },

    {
        studentId: 5,
        Q1: 70.9,
        Q2: 73.8,
        Q3: 80.1,
        Q4: 81.8

    },


];




average =0;

// for (let i=0; i<studentGrades.length; i++){

//     console.log(studentGrades[i][`Q1`]);
//     average = average + studentGrades[i][`Q1`];
// }

for (let i=0; i<studentGrades.length; i++){

    console.log(studentGrades[i]);
    average = (studentGrades[i][`Q1`] + studentGrades[i][`Q2`] + studentGrades[i][`Q3`] + studentGrades[i][`Q4`])/4; 
    console.log(`Average Grade of Student ${i+1}: ${average} `);

    // for (let j =2; j < studentGrades[i].length; j++){

    // }
}

// console.log(average);


//Q: What if we want to create a multiple objects with the same properties? Would you prefer creating 1 object each? No, it will take too long

//To solve this dilemma, Object Constructor will be a good use.

//Object Constructor - serves as a blueprint of our objects.
// Objects created using "this" constructor will inherit what are the function properties and methods set by this function.

//Q: What are the steps in creating an Object Constructor

// //Step 1: Create a template or blueprint
// function Pokemon (name, lvl, hp){
//     this.name = name;
//     this.level = lvl;
//     this.health = hp * 2;
//     this.attack = lvl;

//     this.tackle = function (target){
//         console.log(target);

//         console.log(`This ${this.name} tackled ${target.name}`);

//         console.log(`${target.name}'s health is now reduced to ${target.health - this.attack}`);
//     };

//     this.faint = function(){
//         console.log(`${this.name} fainted!`);
//     }
// }

// //Step 2: Initialize an Object with arguments
// let pikachu = new Pokemon ("Pikachu", 5, 50);
// let charizzard = new Pokemon ("Charizzard", 8, 40)

// console.log(pikachu);
// console.log(charizzard);

//Step 3: Execute the property
//For this example we execute the tackle property of Pikachu object
// console.log(pikachu.tackle(charizzard));
// console.log(pikachu.tackle(charizzard));
// console.log(pikachu.tackle(charizzard));


// function Fight (name, lvl, hp){

//     this.name = name;
//     this.level = lvl;
//     this.health = hp;
//     this.attack = lvl;

//     life= this.health;

//     this.tackle = function (target){

//         // console.log(target);


//         if (target == mother){
//             console.log (`${this.name} punch ${target.name}`);
//             life = life - this.attack;
//         }

//         else if (target == father){
//             console.log (`${this.name} spank ${target.name}`);
//             life = life - this.attack;
//         }

//         console.log(`${target.name}'s health is now reduced to ${life}`)

//             if (life <= 0){
//                     console.log(`${target.name} fainted!`);
//             }
//             else if (life != 0){
        
//                 let answer = prompt("Who should attack?");

//                 if (answer == 'mother'){
                
//                     console.log(mother.tackle(father))
//                 }    
//                 else if (answer == 'father'){
                
//                     console.log(father.tackle(mother))
//                 }
//                 else 
//                     console.log("No answer")
                
//                 }
//     };

    
// }

// let mother  = new Fight ("Mother", 20, 100);
// let father = new Fight ("Father", 25, 70);

// console.log(mother)
// console.log(father)

// let answer = prompt("Who should attack?");

// if (answer == 'mother'){

//     console.log(mother.tackle(father))
// }

// else if (answer == 'father'){

//     console.log(father.tackle(mother))
// }
// else 
//     console.log("No answerfather")


let users = [

    {
        name: "jasper",
        email: "japarvillarosa@gmail.com",
        password: "12345"

    },

    {
        name: "april",
        email: "aprilvillarosa@gmail.com",
        password: "6789"

    }
]

function  login (useremail, userpassword){

    let credentials = users.find((user)=> {
        return user.email === useremail && user.password === userpassword
    });
    

    if (!credentials){

        alert("Login unsuccessful!");
        console.log(credentials);
    }

    else{

        alert("Login Successful");
        console.log(credentials);
    } 
      
    
}


// let useremail = prompt ("Enter email");
// let userpassword = prompt ("Enter password");

// login (useremail, userpassword);

// login("japarvillarosa@gmail.com", "12345")

users.forEach((studentName) => {
    console.log(`My name is ${studentName.name}. Lets be friends!`)
})

