// console.log("Hello World!");

// JavaScript ES6 Updates (2015)
// ES6 is an updated version of JS that helps us to write shorter and easier-to-read codes.

// Template Literals
// Template literals let you combine text and values easily in one string.
/*
SYNTAX:
`string text ${expression}`
*/

const name = "Jane";
const country = "Philippines";

// Before ES6:
console.log('Without using template literals:');
console.log("Hello, my name is " + name + ", and I'm from the " + country + ". Welcome to programming!");

// ES6 Version
console.log('Using template literals:');
console.log(`Hello, my name is ${name}, and I'm from the ${country}. Welcome to programming!`);

// We can write strings in multiple lines and we can also perform operations inside ${}, like solving math expression.
console.log(`${name} attended a math competition.
She solved the problem 8 * 2 and got the answer ${ 8 * 2 };
`);

const interestRate = 0.1;
let principal = 1000;

console.log(`The interest on your savings account is: ${principal * interestRate}`);

// Array Destructuring
// Allows us to extract values from an array and assign them to variables in one line, instead of accessing each value using index numbers.

const fullName = ["Juan", "Dela", "Cruz"];

// Before ES6:
let firstName = fullName[0];
let middleName = fullName[1];
let lastName = fullName[2];

console.log(`Hello ${firstName} ${middleName} ${lastName}! It's nice to meet you.`);

const myFullName = ["Jane", "Doe", "Smith"];

// ES6 Version
const [myFirstName, myMiddleName, myLastName] = myFullName;

console.log(`Hello ${myFirstName} ${myMiddleName} ${myLastName}! It's nice to meet you.`);

// Arrow Functions
// Arrow functions are shorter way to write functions.

/*
SYNTAX:
const functionName = () => {
  // code to execute
}
*/

// Before ES6:
const greetOld = function(name) {
	console.log(`Hello ${name}`);
}

greetOld("Juan");

// ES6 Version:
const greetNew = (name) => {
	console.log(`Hello ${name}`);
}

greetNew("Jane"); 

// Function with Template Literals

// Before ES6:

function printFullName(firstName, middleInitial, lastName) {
	console.log(firstName + ' ' + middleInitial + '. '  + lastName);
}

printFullName("Juan", "D", "Cruz");

// ES6 Version:

const printFullNameArrow = (firstName, middleInitial, lastName) => {
	console.log(`${firstName} ${middleInitial}. ${lastName}`);
}

printFullNameArrow("Jane", "D", "Smith");

// Implicit Return (Arrow Function)
// Automatically returning a value without using the "return"keyword.

// Before ES6:

function addNum(x, y) {
	return x + y;
}
console.log(addNum(2, 2));

// ES6 Version:
// No need for 'return' or '{}' if it's a single expression

const add = (x, y) => x + y;
console.log(add(5, 5));

// Class-based object Blueprints
// A class is a template used to create objects with the same properties and methods.
// Class names use PascalCase naming convention.
/*
SYNTAX:
class ClassName {
  constructor(parameter) {
    this.property = parameter;
  }

  methodName() {
    // code here
  }
}
*/

class CarClass {
	// Constructor is a special method that runs automatically when a new object is created using class
	// It is used to initialize (set) the values of the object.
	constructor(brand, name, year) {
		this.brand = brand;
		this.name = name;
		this.year = year;
	}

	startCar() {
		console.log("The car is starting.");
	}
}

let myCar = new CarClass("Ford", "F-150 Raptor", 2020);
console.log(myCar);
myCar.startCar()

// Creating an object without passing values
// If no arguments provided, the object will be created but its properties will be undefined.
const myNewCar = new CarClass();
console.log(myNewCar);

myNewCar.brand = "Ford";
myNewCar.name = "Ford Territory Hybrid";
myNewCar.year = 2025;

console.log(myNewCar);

// ES7 Update (2016)

// Exponent Operator (**)

// Before ES6:
const powerUsingMathPow = Math.pow(8, 2);
console.log(powerUsingMathPow);

// ES7 Version:
const powerUsingExponentOperator = 8 ** 2;
console.log(powerUsingExponentOperator);

// ES14 Updates (2023)

let numArray = [5, 3, 1, 4, 2];

// Before ES14:
// numArray.sort();
console.log(numArray);

// ES14 Version:
// toSorted()
// Returns a NEW sorted array without changing the original array.
/*
SYNTAX:
arrayName.toSorted()
*/

const sortedArray = numArray.toSorted();
console.log('Result of toSorted() method:');
console.log(sortedArray);

console.log(numArray);

const songList = ["Uhaw", "Ddu Ddu Ddu", "Raining In Manila", "Ere", "Jopay"]; 

// Before ES14:
// songList.splice(2, 1, "Binhi");
console.log(songList);

// toSpliced()
// Returns a NEW array with elements added/removed without modifying the original array.
/*
SYNTAX:
arrayName.toSpliced(startIndex, deleteCount, item1, item2, ...)
*/

const updatedSongList = songList.toSpliced(2, 1, "Buloy");
console.log('Result of toSpliced() method:');
console.log(updatedSongList);

console.log(songList);

// findLast()
// Returns the LAST element that matches the condition.
// Starts checking from the end of the array.

const arrayNumbers = [15, 2, 8, 6, 24, 23];

// Use findLast() to get the last even number in the array
const lastEvenNumber = arrayNumbers.findLast((number) => {

	// Check if the number is even
	return number % 2 === 0;
})

console.log(lastEvenNumber);