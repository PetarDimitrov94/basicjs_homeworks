// Exercise 3
// Create a student registry form. The form should have: First Name, Last Name, Age
// The form should have a save button which will create a student object and add it to an array (students). Log the array after every save to see the results in the console.
// Bonus: Make the students appear in an unordered list in the page.

const students = [];
const saveButton = document.getElementById("saveButton");
const studentList = document.getElementById("studentList");

saveButton.addEventListener("click", function () {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;
  const student = { firstName, lastName, age };
  students.push(student);
  console.log(students);

  const li = document.createElement("li");
  li.textContent = `${firstName} ${lastName}, Age: ${age}`;
  studentList.appendChild(li);

  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("age").value = "";
});
