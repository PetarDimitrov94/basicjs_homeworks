// Exercise 01 - Create a function called tellStory(), The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings ), he function should return one big string with a story made from the arguments. This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end. The value that is returned from the function should be printed in the console or in alert

function tellStory(name, mood, activity) {
  let yourName = name;
  let yourMood = mood;
  let yourActivity = activity;

  let story = `This is ${yourName}. ${yourName} is a nice person. Today they are ${yourMood}. They are ${yourActivity} all day. The end.`;
  console.log(story);
}

tellStory("Petar", "studying", "happy");

// Exercise 02 - Write a function that will take an array of 5 numbers as an argument and return the sum. Print it in the console or in alert

function arrayOfNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

let numbers = [1, 5, 10, 15, 20];
let result = arrayOfNumbers(numbers);
console.log(result);

// Exercise 03 - Write a javascript function that: When given any array of strings (should work with array with any number of elements). It will create one big string and return it

function arrayOfStrings(array) {
  return array.join(" ");
}

let result1 = arrayOfStrings(["Hello", "there", "students", "of", "SEDC", "!"]);
console.log(result1);

// Exercise 04 - Title: Looping structures.
// Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space.

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + "\n");
  } else {
    console.log(i + " ");
  }
}

// Exercise 05 - Title: Looping structures
// Description: Write a JavaScript function that will return: The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11], Output: Max: 11, Min: 3, Sum: 14

function arrayWithNumbers(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let minValue = Math.min(...arr);
  let maxValue = Math.max(...arr);
  console.log("Min element is " + minValue);
  console.log("Max element is " + maxValue);
  console.log("The sum is " + sum);
}

let number2 = [1, 5, 15, 20, 50];
arrayWithNumbers(number2);

// Exercise 06 - Title: Looping structures
// Description:Write a javascript function that: When given 2 arrays of students firstNames and lastNames will return a new array with students full names Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"],  Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

function getFullName(firstNames, lastNames) {
  let fullNames = [];
  for (let i = 0; i < firstNames.length; i++) {
    fullNames.push(`${i + 1}. ${firstNames[i]} ${lastNames[i]}`);
  }
  return fullNames;
}
let first = ["Bob", "Jill"];
let last = ["Gregory", "Wurtz"];
let rezult3 = getFullName(first, last);
console.log(rezult3);
