// Exercise 01 - Create OBJECT animal with 2 properties and 1 method: Name, Kind, speak (method), this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

class Animal {
  constructor(name, kind) {
    this.name = name;
    this.kind = kind;
  }
  speak(message) {
    console.log(`My name is ${this.name}. I am ${this.kind}`);
    console.log(`Dog says: ${message}`);
  }
}

const myAnimal = new Animal("Sky", "Mastiff");
console.log(myAnimal);
myAnimal.speak("hey bro!!!");

// Exercise 02 - Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g. Already read 'The Robots of dawn' by Isaac Asimov. (if true). You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).

class Book {
  constructor(title, author, readingStatus) {
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;
  }
  yourReadingStatus() {
    if (this.readingStatus === true) {
      console.log(`Already read "${this.title}" by ${this.author}.`);
    } else {
      console.log(`You still need to read ${this.title} by ${this.author}`);
    }
  }
}
const myBook = new Book("The Robots of dawn", "Isaac Asimon", true);
console.log(myBook);
myBook.yourReadingStatus();

const secondBook = new Book(
  "Mockingjay: The Final Book of The Hunger Games",
  "Suzanne Collins",
  false
);
console.log(secondBook);
secondBook.yourReadingStatus();
