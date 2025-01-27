//** ======================= PART 1: Thinking Functionally ==================*/
console.log("==================== PART 1: Thinking Functionally ==================");

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

let array = ['say', 'hello', 'in', 'the', 'morning']
let n

function strLongThan(arr, n){
    let result =[ ];
    for (let str of arr) {
        if (str.length > n) {
            result.push(str);
        }
    }
    return result
}

console.log(strLongThan(['say', 'hello', 'in', 'the', 'morning'], 3));


//Todo: Take a number, n, and print every number between 1 and n without using loops. Use recursion.

const printNumbers = n =>{
    if (n < 1) return;
    printNumbers(n - 1);
    console.log(n);
}
console.log("Print n");
printNumbers(10)


//**========================= PART 2: Thinking Methodically ============ */
console.log("==================== PART 2: Thinking Methodically ===================");

const people = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

//Todo - Sort array by age
const sortedByAge = [...people].sort((a, b) => Number(a.age) - Number(b.age));
console.log(sortedByAge);


//todo - Filter array (remove > 50)
const filteredByAge = people.filter(person => Number(person.age) <= 50);
console.log(filteredByAge);


//todo - Map array (change & increase)
const mappedPeople = people.map(person => ({
    ...person,
    job: person.occupation,
    age: String(Number(person.age) + 1)
}));

console.log(mappedPeople);


//todo - Use reduce method for sum (then result for average)
const sumOfAges = people.reduce((sum, person) => sum + Number(person.age), 0);
const averageAge = sumOfAges / people.length;
  
console.log(sumOfAges); // Sum of ages
console.log(Math.ceil(averageAge)); // Average age
  
//** ============================== PART 3: Thinking Critically ============================= */
console.log("====================== PART 3: Thinking Critically =====================");

//Todo: Take an object and increment its age field.
function incAge(obj) {
    if (!obj.age) obj.age = 0;
    obj.age += 1;
    obj.updated_at = new Date();
}
  
//Todo: Take an object, make a copy, and increment the age field of the copy. Return the copy.
function incAgeCopy(obj) {
    const newObj = { ...obj };
    if (!newObj.age) newObj.age = 0;
    newObj.age += 1;
    newObj.updated_at = new Date();
    return newObj;
}
  
//log data 
const person = { name: "Superman", age: 35, updated_at: new Date("2024-12-31") };
incAge(person);
console.log("Increment by reference:", person);

const newPerson = incAgeCopy(person);
newPerson.updated_at.setTime(new Date("2025-01-01").getTime())
console.log("Original after modifying:", newPerson);
console.log("Copied:", person);
