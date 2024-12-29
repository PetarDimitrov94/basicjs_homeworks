// HOMEWORK Part 1
// Change the page with JavaScript
// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed

const firstHeader1 = document.getElementById("myTitle");
firstHeader1.innerHTML = `
<h1>Header 1</h1>
`;

const allDivs = document.querySelectorAll("div");

const lastDiv = allDivs[allDivs.length - 1];

const secondHeader1 = lastDiv.querySelector("h1");
secondHeader1.innerHTML = `
<h1>Header 1 (third div)</h1>
`;

const firstHeader3 = lastDiv.querySelector("h3");
firstHeader3.innerHTML = `
<h3>Header 3</h3>
`;

const firstDiv = document.getElementById("first");

const firstParagraph = firstDiv.querySelector("p");
firstParagraph.innerHTML = `
<p>Paragraph 1</p>
`;

const secondDiv = document.querySelector(".anotherDiv");

const secondParagraph = secondDiv.querySelector("p");
secondParagraph.innerHTML = `
<p>Paragraph 2</p>
`;
const firstText = secondDiv.querySelector("text");
firstText.innerHTML = `
<text>Text 1</text>
`;
