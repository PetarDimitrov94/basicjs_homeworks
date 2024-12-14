// Exercise 01 Chinese Zodiac

let input = prompt("Enter the year you were born");
let convertedInput = parseInt(input);

let chineseZodiac = (convertedInput - 4) % 12;
console.log(chineseZodiac);

if (chineseZodiac === 0) {
  console.log("Rat");
} else if (chineseZodiac === 1) {
  console.log("Ox");
} else if (chineseZodiac === 2) {
  console.log("Tiger");
} else if (chineseZodiac === 3) {
  console.log("Rabbit");
} else if (chineseZodiac === 4) {
  console.log("Dragon");
} else if (chineseZodiac === 5) {
  console.log("Snake");
} else if (chineseZodiac === 6) {
  console.log("Horse");
} else if (chineseZodiac === 7) {
  console.log("Goat");
} else if (chineseZodiac === 8) {
  console.log("Monkey");
} else if (chineseZodiac === 9) {
  console.log("Rooster");
} else if (chineseZodiac === 10) {
  console.log("Dog");
} else if (chineseZodiac === 11) {
  console.log("Pig");
}

// Exercise 02 = Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types: object, boolean, number, string, undefined;

function displayTape(value) {
  console.log(typeof value);
}

displayTape({});
displayTape(true);
displayTape(30);
displayTape("Homework");
displayTape(undefined);

// Exercise 03 - Write a JavaScript function that will return: Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years

function calculateDogAga(dogAge, humanAge = 7) {
  if (humanAge === 7) {
    let result = dogAge / 7;
    console.log(`Your dog is ${result} human years old`);
    return result;
  } else {
    let result = dogAge * humanAge;
    console.log(`Your dog is ${result} human years old`);
    return result;
  }
}
calculateDogAga(2);
calculateDogAga(14, 7);
calculateDogAga(5, 7);
