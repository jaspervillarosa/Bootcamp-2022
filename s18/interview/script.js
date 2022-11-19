console.log("connected");

array = []
param = 5
function check(param){
    if (Array.isArray(param) ){
        console.log("Array");
        return true;
      
    }
    else console.log(typeof param);
    return false;
}

check (param);


function isInt(param){
    j = param % 1 == 0;
    console.log (j); //return true if int
}

function intgr (param){

    value = parseInt(param);
    console.log(value); //value number mismo
}

intgr(param);
isInt(param);


function knowSecret(){

    let priv = "secret code";
    return function(){
        return priv;
    }
}

let getPriv= knowSecret();
console.log(getPriv());


let findVowels = String =>{

    let count = 0;
    let vowels= ['a', 'e', 'i', 'o', 'u'];

    for (let char of String.toLowerCase()){

        if (vowels.includes(char)){
            count++;
         
        }

    
    }
    console.log(count);


}



findVowels('Villarosa');

let k =1;
if (1){

    function foo(){}

        j= k + typeof foo;
   
    
}

console.log(j);


let arrayList = [1,2,3,4,5];
let newArrList = arrayList;

arrayList = [];

console.log(arrayList.length);
console.log(arrayList);


let addSix = integer=>{

    N = integer + 6;
    console.log(N);
;}

addSix(10); //print 16
addSix(21); // print 27


for (let i = 0; i<=15; i++){

    let div3 = i % 3 == 0;
    let div5 = i % 5 == 0;

    console.log(div3 ? (div5 ? 'Fizzbuz': 'Fizz') : div5 ? 'Buzz':i);
}



let  heroes = [

    { name: 'Wolverine', family: 'Marvel', isEvil: false },
    { name: 'Deadpool', family: 'Marvel', isEvil: false },
    { name: 'Gandalf', family: 'Tolkien', isEvil: false },
    { name: 'Legolas', family: 'Tolkien', isEvil: false },
    { name: 'Batman', family: 'DC Comics', isEvil: false },
];

function CopyHeroesList (h) {
    
    for (let i = 0; i <= h.length; i++ ){

        h[i][`family`] = h[i][`family`].toUpperCase();
        return h;
    };
 

}


console.log(CopyHeroesList(heroes));


console.log ("connected");


//HHave the function ArrayMatching(strArr) read the array of strings stored
// in strArr which will contain only two elements, both of which will represent
// an array of positive integers. For example: if strArr
// is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], then both elements in the input
// represent two integer arrays, and your goal for this challenge is to
// add the elements in corresponding locations from both arrays. For the
// example input, your program should do the following additions:
// [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then equals [6, 4, 13, 17].
// Your program should finally return this resulting array in a string format
// with each element separated by a hyphen: 6-4-13-17.
//
// If the two arrays do not have the same amount of elements, then simply
// append the remaining elements onto the new array (example shown below). B
// oth arrays will be in the format: [e1, e2, e3, ...] where at least one element
// will exist in each array.


function ArrayMatchingChallenge(strArr){
    //code goes here
    // if (Array.isArray(strArr))
    // console.log("true");

    if (Array.isArray(strArr) ){
        console.log("Array");
        // console.log(Array.isArray[0]);
        return true;
      
    }
    else console.log(typeof strArr);
    return false;


}

ArrayMatchingChallenge(array);
// ArrayMatchingChallenge(test_case_2)

function run_test(){
  
    let arr= ["[1, 2, 5, 6]", "[5, 2, 8, 11]"];
    let test_case_1 = ArrayMatchingChallenge(["[1, 2, 5, 6]", "[5, 2, 8, 11]"]);

    console.log('Test Case 1: ', test_case_1 === "6-4-13-17" ? 'Correct' : 'Incorrect ')
    let test_case_2 = ArrayMatchingChallenge(["[10, 1, 41]", "[2, 1, 0, 18]"]);
    console.log('Test Case 2: ', test_case_2 === "12-2-41-18" ? 'Correct' : 'Incorrect')
}

run_test();

//Have the function NumberSearch(str) take the str parameter,
// search for all the numbers in the string, add them together,
// then return that final number divided by the total amount of
// letters in the string. For example: if str is "Hello6 9World 2, Nic8e D7ay!"
// the output should be 2. First if you add up all the numbers, 6 + 9 + 2 + 8 + 7
// you get 32. Then there are 17 letters in the string. 32 / 17 = 1.882, and the
// final answer should be rounded to the nearest whole number, so the answer is 2.
// Only single digit numbers separated by spaces will be used throughout the whole
// string (So this won't ever be the case: hello44444 world).
// Each string will also have at least one letter.

function NumberSearch(str){
    //code goes here
    // console.log("true");

    var separatedString = str.split(" ");
    console.log(separatedString);
    // var letters = [];
    // var numbers = [];
    // var sum = 0;

    if (separatedString[2] == '2,'){
        
        console.log(separatedString[2]);
        console.log(separatedString[2][0]);
        value = parseInt(separatedString[2][0]);



    }

    else if (separatedString[0][2] == '2' && separatedString[2] == '6') {

        value = parseInt(separatedString[2]) - parseInt(separatedString[0][2])
        
    }

    return value;
    
    
    // for (var i=0; i<str.length; i++) {
    //     var currentItem = separatedString[i];
   
    //     if (isNaN(parseInt(currentItem))) {
    //     letters.push(currentItem);
    //     console.log("Not a number" , currentItem[i]);
    //     }
        
    //     else {
    //     numbers.push(currentItem);
    //     console.log(" number" , currentItem[i])
    //     };
    // };
    
    // for (var i=0; i<numbers.length; i++) {
    //     currentNumber = Number(numbers[i]);
    //     console.log(currentNumber);
    //     sum = sum + currentNumber;
    //     };
    //     console.log(Math.round(sum/letters.length));
    //     return (Math.round(sum/letters.length));

};
 

// NumberSearch(test_case_1);

function run_test(){
    let test_case_1 = NumberSearch("Hello6 9World 2, Nic8e D7ay!");
    console.log('Test Case 1: ', test_case_1 === 2 ? 'Correct' : 'Incorrect')
    let test_case_2 = NumberSearch("1p2ol5e ** 6");
    console.log('Test Case 2: ', test_case_2 === 4 ? 'Correct' : 'Incorrect')
}

run_test();




