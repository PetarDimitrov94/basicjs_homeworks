// Exercise 01 - Manipulate the DOM
// Select the first div
// Select all paragraphs
// Select the last div
// Select the header 3 in the last div
// Select the header 1 in the last div
// Get the text from the first paragraph in the second div
// Add the word "text" to the text element in the second div
// Change the text of the header 1 in the last div
// Change the text of the header 3 in the last div
// Note:You can't change the HTML

// Select the first div
const firstDiv = document.getElementById("first");
console.log("firstDiv:", firstDiv);

// Select all paragraphs
const allParagraphs = document.getElementsByTagName("p");
console.log("All <p> elements:", allParagraphs);

// Select the last div
const lastDiv = document.getElementsByTagName("div");
console.log("Last div:", lastDiv[lastDiv.length - 1]);

// Select the header 3 in the last div
const header3 = document.querySelector("h3");
console.log("h3 in the last div:", header3);

// Select the header 1 in the last div
const lastDivFirstH1 = document.querySelector("div:last-of-type h1"); // se izmaciv za ova
console.log("H1 in the last div:", lastDivFirstH1);

// Get the text from the first paragraph in the second div
const secondDiv = document.querySelector("p.paragraph.second"); // ova go vidov na w3schools
const textFromTheParagraph = secondDiv.textContent;
console.log(
  "Text from the first paragraph in the second div:",
  textFromTheParagraph
);

// Add the word "text" to the text element in the second div
const div = document.querySelectorAll("div");
const secondDivText = div[1].querySelector("text");
secondDivText.textContent += " text";
console.log("Add the world:", secondDivText);

// Change the text of the header 1 in the last div
const lastDivFirstH = document.querySelector("div:last-of-type h1");
const header1TextContent = lastDivFirstH.textContent;
lastDivFirstH.textContent = " This is a new text";
console.log("New text:", lastDivFirstH);

// Change the text of the header 3 in the last div
const headerthree = document.querySelector("h3");
headerthree.textContent = " I'm finish with this exercise";
console.log("New text:", headerthree);
