console.log("connected");

let count = 20;
console.log(count);

// for (count; count > 0; count --){

//     if (count % 2 == 0){

//         console.log(count);
//     }

//     else continue;
// }

let b;
let userInput = prompt("Enter a number");

function counting(b) {

        if (isNaN(b)) {

            console.log("Not a number");
            
        }
        else if (b == ''){

            console.log("invalid input");
        }
        else if (b % 2 == 0)
        {
            console.log("even");
        }

        else if (b % 2 == 1) {

             console.log("odd");
         }

}

counting(userInput);