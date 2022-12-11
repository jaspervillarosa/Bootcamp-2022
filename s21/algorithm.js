/*
    BinarySearch - applicable when an array is sorted

    Psuedocode:

    1. Create a variable that displays an array of sorted numbers and another variable
    that find the number

    2. Create a function that accepts two argumnets ( a sorted array and a value)

    3. Inside the function, create a variable for left and right pointer. Left pointer is for the value will be for the first item i the array and the right variable for the value will be the last item in the array . Also create a middle point variable which can get from an average left and right.

    4. Vreate a loop until the mid value

    5. If ...
*/

let numbers =[3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 36, 42, 48, 58]
let valFound = 42;

let binarySearch = (sortedList, value) => {

    let left = 0;
    let right =  sortedList.Length -1;

    let mid = Math.floor((left + right)/2);

    while (sortedList[mid] !== value && left <=right ){

        if (value < sortedList[mid]){

            right = mid -1;
            
        }

        else {


            left = mid + 1;
        }

        mid = Math.floor((left + right)/2);
    }



    if (sortedList [mid] === value){
        return (`The value ${value} is in index ${mid}`);id
    }

    else {

        return "The value is not found"; //item not foumd
    }
}

console.log(binarySearch(numbers, valFound));

/*
    SORTING ALGO
    Bubble Sorting Algorithm

*/

//compares the adjacent 
function bubbleSorting (arr) {

    for (let j = 0; j<arr.length; j++){

        for (let k = 0; k < arr.length - j -1; k++){

            if (arr [ k+1] < arr[k]){

                [arr [ k+1], arr[k] ]= [arr[k], arr[k+1]] 
            }
        }
    }

    return arr;
}

console.log(bubbleSorting([5,2,1,3,4]));

//Selection sort - find the smallest number then place it to its proper order

function selectionSorting (arr){

    let min;

    for (let i = 0; i< arr.length; i++){

        //index of the smallest element 
        min = i;

        //check through the rest of the array
        for (let j = i + 1; j< arr.length; j++){

            if (arr[j] < arr[min]){

                min = j;

            }
        }

        //compare the indexes   
        if (min !== i){

            [arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }

    return arr;

}

console.log(selectionSorting([29, 72, 98, 13, 87, 66, 52, 51, 36]))

//insertion sorting - compares the value one at a time

function insertSorting(array){

    //start from the second element

    for (let i = 1; i< array.length; i++){

        //go through the elements
        for (let j =1-1; j> -1; j--){

            if (array [j+1] < array[j]){

                //swapping procedure
                [array [j+1], array[j]] =[array[j], array[j+1]]
            }
        }
    }

    return array;
}

console.log(insertSorting([23, 1, 10, 5, 2]));

//merge sorting - divide the elements in the array and sort it until it is finalize

function merge(array1, array2){

    //create a new empty array and have 2 value pointers
    let res = [], i = 0, j=0;

    if (array1.length > 1){
        
        let min = 0;

        for (let i = 0; i< array1.length; i++){

            if (i !== min){

                if (array1[i] < array1[min]){

                    [array1[i], array1[min]] = [array1[min], array1[i]]
                    min = i
                }
            }
        }
    }

    if (array2 > 1){

        let min = 0;

        for (let i = 0; i< array2.length; i++){

            if ( i !== min){

                if (array2[i] < array2[min]){
                    //swap element

                    [array2[i], array2[min]] = [array2[min], array2[i]]
                    min = i;
                }
            }
        }
    }

    //value comparison 

    while(i < array1.length && j < array2.length){

        if (array1[i] < array2[j]){

            res.push(array1[i]);
            i++;
        }

        else {

            res.push(array2[j]);
            j++
        }
    }

    while (i < array1.length){

        res.push(array1[i]);
        i++
    }

    while (j < array2.length){

        res.push(array2[j]);
        j++
    }

    return res;
}

function  mergeSort(arr){

    if (arr.length <= 1) return arr;

    let mid = Math.ceil(arr.length / 2);
    let array1 = arr.slice(0, mid);
    let array2 = arr.slice(mid);

    let array1_subArrays = [];
    sorted_array1_subArrays = [];

    let array2_subArrays = [];
    sorted_array2_subArrays = [];
    //loop through array 1 making subarrys of the two elements

    for (let i = 0; i< array1.Length; i += 2){

        array1_subArrays.push(array1.slice(i, i+2))
    }

    
    //loop through array 2 making subarrys of the two elements

    for (let i = 0; i< arr.Length; i += 2){

        array2_subArrays.push(array2.slice(i, i+2))
    }

    // sort each subArrays of array1 
    for (let i=0; i< array1_subArrays.length; i += 2){

        let result = merge(array1_subArrays[i], array1_subArrays[i+1]);
        result.forEach((value)=> sorted_array1_subArrays.push(value));
    }

    // sort each subArrays of array1 
    for (let i=0; i< array2_subArrays.length; i += 2){

        let result = merge(array2_subArrays[i], array2_subArrays[i+1]);
        result.forEach((value)=> sorted_array2_subArrays.push(value));
    }

    let result = merge(sorted_array1_subArrays, sorted_array2_subArrays);
    return result;

}

console.log(mergeSort([70, 50, 30, 10, 20, 40, 60])); //it didnt work

//Quick Sort
//step 1: create a partition
function quickSortPartition(items, left, right){

    let pivot = items[Math.floor((right + left) / 2)];
    let i = left; //left pointer
    let j = right; // right pointer

    while ( i <= j){

        //increment left pointer if the value is less than pivot
        while(items[i] < pivot){

            i++;
        }

        //decrement right pointer if the value is more than pivot

        while(items[j] > pivot){

            j--;
        }

        if (i<=j){
            [items[i], items[j]] = [items[j], items[i]];
            i++;
            j++;
        }
    }
    //retrun to the left pointer
    return i;
}

//step 2: sorting process
function quickSort(items, left, right){

    let indexed;

    if (items.length > 1){

        index = quickSortPartition(items, left, right); //get the left pointer returned

        if (items.length > 1){

            index = quickSortPartition(items, left, right)
        }

        if (left < index -1){

            //more elements on the left side
            quickSort(items, index, index-1)
        }

        if (index < right)
        {
            //more elements on the right side
            quickSort(items, index, right)
        }
    }

    return items;
}

let items1 = [5,3,7,6,2,9];
console.log(quickSort(items1, 0, items1.length-1));

// string match menthod - built in function 

/*
    Syntax: 
    str.match (regexp)

    whereas: 
    str = string
    match() take in
    regexp - regular expression object(Argument is implicitly converted to a regulr expression if it is a non regular expression)

    NOTE: if we do not give any parameters, match() return [""]
*/

const String = " I am learning Javascript not Java";
const re = /Java/;

let result = String.match(re);
console.log("Result of matching /Java/");
//without using gflg - we only get the first match but with detailed information like index, input and groups
console.log(result);

const re1 = /Java/g;
console.log("Result of matching /Java/ with g Flag");
let result1 = String.match(re1);
console.log(result1)

const sentence = "My name is Jasper. Her name is Hoshi.";

const re2 = /name\sis\s[a-zA-Z]+\./gi;

let result2 = sentence.match(re2); 
console.log(result2); // ['name is Jasper.', 'name is Hoshi.']

const re3 = /name\sis\s(?<name>[a-zA-Z]+)\./gi;
let result3 = sentence.match(re3);
console.log(result3.groups);

//String parse

const data =
`

Title, Author, Publication Date, Publisher
ES6 in Practice, Zsolt Nagy, 207, Self Published
The Developer's Edge, Zsole Nagy, 2016, Self Published
Regex Quick Syntx Reference, Zsolt Nagy, 2018, Appress --> data type string

`;

const result4 = data.trim().split(`\n`).map(row => row.split(','));
console.log(result4)

const result5 = [];
const rows = data.trim().split('\n');

for (let row of rows){

    result5.push(row.split(','));

}
console.log(result5);
console.log(typeof result5)