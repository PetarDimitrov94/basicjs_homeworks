// Exercise 01

let priceOfOnePhone = 119.95;
let quantityOfPhones = 30;
let taxRate = 5;

let totalPhonePrice = priceOfOnePhone * quantityOfPhones;
console.log(totalPhonePrice);

let totalTaxRate = totalPhonePrice * (taxRate / 100);
console.log(totalTaxRate);

let totalPrice = totalPhonePrice + totalTaxRate;
console.log("Total price for 30 Phones including tax is:" + totalPrice);

// Exercise 02

let minutes = 50;
let secondsInOneMinutes = 60;
let convertMinutesInSeconds = minutes * secondsInOneMinutes;
console.log(convertMinutesInSeconds);

// Exercise 03

let number = 4;
let newNumber = number + 1;
console.log(newNumber);

// Exercise 04

let baseOfTriangle = 5;
let heightOfTriangle = 8;
let areaOfTriangle = (1 / 2) * baseOfTriangle * heightOfTriangle;
console.log(areaOfTriangle);

// Exercise 05

let lengthOfRectangle = 4;
let widthOfRectangle = 3;
let perimetarOfRectangle = 2 * lengthOfRectangle + 2 * widthOfRectangle;
console.log(perimetarOfRectangle);

// Exercise 06

let valueOfP = 3.14;
let radius = 5;
let calculateAreaOfCircle = radius * radius * valueOfP;
console.log(calculateAreaOfCircle);
