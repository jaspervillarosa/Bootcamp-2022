console.log("connected");
//FOR LOOPS - repeats a block of code as long as a certain condition is met
//used to execute a block of code for a certain number of times.

/*
    for (initialization; condition; increment)
    {
        //code
    }

    USAGES:
    1. Initialization - initialize the counter variables and EVALUATED ONCE unconditionally before the first execution of the loop body

    2. Condition - it is evaluated at the beginning of each iteration (loop)
    - if true, the loop statements execute.
    - if false, loop execution ends

    3. Increments - updates the loop counter with a new value each time the loop runs.

*/

for (let i = 0; i <= 5; i++){
    //i = 0
    //true
    //i++ = 1

    console.log (`This is number ${i}`);
}

let herName = "Lady Ada Augusta Byron King";

console.log(herName.length);
console.log(herName[6]); //d
//index - position of the character in a string
//zero based
console.log(herName[13]); //s

//displaying the initial value outside the for loop statement
let letter = 0;
for (letter; letter<herName.length; letter++)
{
    console.log(herName[letter]);
    //it displays next line per character
}
//for Loop in an Array
let fruits = ["atis", "mango", "durian", "apple mango"];

console.log(fruits[2]); //durian
console.log(fruits[0]);//atis
console.log(fruits.length); //4 - display the index

let index = 0;
for (index; index<fruits.length; index++)
{
    console.log(fruits[index]);
    //displays the elements of an array
}

let cars = [
    {brand: "Toyota", type: "Sedan"},
    {brand: "Mazda", type: "Hatchback"},
    {brand: "BMW", type: "Sedan"}
];

let x = 0;
for (x; x<cars.length; x++)
{
    console.log(cars[x]); //it displays the object properties of an array
    console.log(cars[x].brand);  //it displays the brand inside the object
    console.log(cars[x].type); 
}

//WHILE LOOP

/*
    SYNTAX:
    while (condition){
        statement
    }
*/

let count = 5;
while (count > 0){
    console.log(count);
    count--;
}

/*

Create a loop where it will count from 20 to 0.
Display the number in the console if it is even number.

Stretch Goals
Create a prompt that will let the user enter values from 0 to 20.
Create a loop where it will count from 20 to 0.
Display the number in the console if it is even number.
Enclosed your code inside a function.


*/

/*
    SOLUTION A:

    Create a loop where it will count from 20 to 0.
    Display the number in the console if it is even number.

*/

let b = 20;
for (b; b>=0 ; b--){
    if (b % 2 === 0)
    {
        console.log(`number: ${b}`);
    }
}

/*
SOLUTION B
Stretch Goals
Create a prompt that will let the user enter values from 0 to 20.
Create a loop where it will count from 20 to 0.
Display the number in the console if it is even number.
Enclosed your code inside a function.

*/

// let userInput = prompt("Enter a number between 0 to 20");

// function counting(b) {
//     for (b; b >= 0; b--){
//         if (b % 2 === 0)
//         {
//             console.log(b);
//         }
//     }
// }
// counting(userInput);

let count1 = 20;
while (count1 > 0 )
{
	if (count1 % 2 == 0)
	{
		console.log(count1);
	}
	else continue;
	count1 --;
}

