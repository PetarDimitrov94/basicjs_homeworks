// HOMEWORK Part 2
// Create an array with numbers
// Print all numbers from the array in a list element, in the HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)

const myArray = [1, 3, 5, 7, 9];
console.log(`My numbers of the Array are:`, myArray.join(" "));

let sum = 0;
for (i = 0; i < myArray.length; i++) {
  sum += myArray[i];
}

console.log("The sum of all of the numbers is:", sum);

const mathematicalEquasion = myArray.join(" + ") + " = " + sum;
console.log(mathematicalEquasion);

const allParagraphs = document.querySelectorAll("p");

const firstParagraph = document.querySelector("p");
firstParagraph.innerHTML = myArray.join(" ");

const secondParagraph = allParagraphs[allParagraphs.length - 2];
secondParagraph.innerHTML = sum;

const thirdParagraph = allParagraphs[allParagraphs.length - 1];
thirdParagraph.innerHTML = mathematicalEquasion;
