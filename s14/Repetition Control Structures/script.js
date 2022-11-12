console.log("connected");

let inputUser = parseInt(prompt("Input Number"));
let num = inputUser;

function checkNum (num){

    if (num < 50) {

        console.log(`Current at number ${num}. Terminating the loop`);
    } 

    else if (num >=50){

        console.log("Wonderful! The number is greater than or equal to 50 ")
    }
    


}

checkNum (inputUser);

function divisible10(num) {

    if (num % 10 == 0){

        console.log(`The number is divisible by 10. Skipping the number`)
    }

    else if (num % 5 == 0){

        console.log(`The number ${num} is divisible by 5. Wonderful! Thus, Im displaying this number`)
    }
}

divisible10(inputUser);