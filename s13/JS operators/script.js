console.log("connected");

/*
Essay

1.What is the difference between a comparison operator and an assignment operator?

A comparison operator compares two values and returns true or false depending on whether the comparison is true. An assignment operator assigns a value to a variable.


2.What is a Boolean? What does it represent?

A Boolean is a logical data type that can have one of two values: true or false.

3.How is the += operator different than + operator?

The += operator is an assignment operator that adds the value of the right operand to the value of the left operand and assigns the result to the left operand. The + operator is an arithmetic operator that adds the value of the right operand to the value of the left operand.

*/

let userInputX = prompt("Enter number for x value");
let userInputY = prompt("Enter number for y value");
let x = userInputX;
let y = userInputY;



x += y;
console.log(x);
console.log(y); //y values are not modified, only the x

x -= y;
console.log(x);
console.log(y);

x *= y;
console.log(x);
console.log(y);

x /= y;
console.log(x);
console.log(y);

function checkXY(x, y) {
    if (x>=y) {

        console.log("X is greater than or equal to Y");
    }

    else if (x<=y) {

        console.log("Y is greater than or equal to X");
    }

    else if (x!==y){

        console.log("The values for x and y are not the same!");
    }
}

checkXY(userInputX, userInputY);
       