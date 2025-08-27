const readline = require('readline-sync');
let name = readline.question("Hello! What is your name? ");
console.log("Welcome, " + name + ".");
let questionOne = readline.question("Is string a primitive data type?");
let questionTwo = readline.questionInt("How many possible values do Booleans have (hint: the answer is a number)?");
let questionThree = readline.question("What is the data type of an object?");
let questionFour = readline.question("What is the data type of an array?");
let questionFive = readline.question("What is it called when you change a value's data type?");

console.log("Here are your answers: " + questionOne + ", " + questionTwo + ", " + questionThree + ", " + questionFour + ", " + questionFive + ". " + "Thank you, " + name + "!" );