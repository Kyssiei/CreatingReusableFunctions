//** PART 1 */
//Todo: Take an array of numbers and return the sum 
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function sumArray(arr){
    let sum = 0;
    for(let nums of arr){ 
    sum += nums; // add each number to sum
    }
    return sum;
}

console.log(sumArray(nums));

//Todo: Take an array of numbers and return the average 
// Using the array from the first part
function averageArray(arr){
    let sum = sumArray(arr);
    let avg = sum / arr.length; 
    return avg;
}

console.log(averageArray(nums))

//Todo: Take an array of strings and return the longest string 

let string = ['princess bubblegum', 'pink diamond', 'blossom', 'pink panther', 'patrick star', 'minnie mouse']

function longestString(arr){
    let longestString = ""; // Step 1: Initialize  as an empty string

    // Step 2: loop through the atrray of strings 
    for (let str of arr){
        if (str.length > longestString){
            longestString = str; // Update LongestString if current str is longer 
        }
    }
    // Step 4: Return the Longest String
    return longestString;

}
// print the longest string 
console.log(longestString(string));

//Todo: Take an array of strings, and a number and return an array of the strings that are longer than the given number 

// strLongThan (['mango', 'cherry', 'watermelon', 'blueberry', 'strawberry', 3]);

// let n = 3

// function strLongThan(arr, n){
//    let result = [];  
//    for(let str of arr){
//     if(str.length > n){
//         result.push(str)
//     }
//    }
//    return result; 
// }

// console.log(strLongThan(['mango', 'cherry', 'watermelon', 'blueberry', 'strawberry']));
