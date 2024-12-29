// Exercise 2
// Weight calculator in chickens. Want to know how you wiegh in chikens? No problem!
//Write a function named weightInChickens that:
//Takes an input weigh in kilograms
//Calculates weight in chickens ( 1 chicken = 0.5kg )
//The input should be entered through prompt
//The result should be shown in the HTML of the page
//Note:The html page needs to have title and result paragraph

function weightInChickens(input) {
  const weight = prompt("Enter your weight in kg");
  chickens = weight / 0.5;
  document.getElementById(
    "result.paragraph"
  ).textContent = ` That weight is equals ${chickens} chickens`;
}

weightInChickens();
