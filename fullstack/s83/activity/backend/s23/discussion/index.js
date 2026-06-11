// Comments
	// Comments are parts of the code that are ignored by the programming language.
	// They are used to describe or explain the writted code.

/*
	There are two types of comments:
		1. Single-line comments, denoted by two slashes
		2. Multi-line comments, denoted by a slash and an asterisk
*/ 

// JavaScript Statement and Syntax

// console.log() is used to display messages or values in the browser console, usually for testing and debugging JavaScript code.
// Statements in programming are instructions that tell the computer what to do.
// Syntax in programming is the set of rules that describe how statements must be constructed.
console.log("Hello World");

console.log("This is our first JS session!");

// Variables

console.log("Jane Doe");

// Variables can be used to contain data within a program.
// Variables can be used to contain data within a program.
// A variable can be created using the "let" keyword, and the "=" operator is used to assign an value.
/* 
SYNTAX: 
    let <nameOfVariable> = <valueOfVariable> 
*/
let myName = "Jane Doe";

// Variables do not have "double quotes".
console.log(myName);
console.log(myName);
console.log(myName);

// Variable Initialization
// Variable Initialization refers to assigning a value to a variable when it is created.
let myPet = "Bantay";
console.log(myPet);

myPet = "Didoy";
console.log(myPet);

// Variable Reassignment
// Reassigning a variable means changing or updating the value stored in a variable after it has been declared.

let productName = "desktop computer";
console.log(productName);

productName = "Alienware Aurora";
console.log(productName);

// Variable Declaration
// Variable declaration is the process of creating a variable by specifying its name, without necessarily assigning a value yet.
let productPrice;

console.log(productPrice); // Result: Undefined

productPrice = 120000;
console.log(productPrice); 

// console.log(hello); // Uncaught ReferenceError: hello is not defined
// let hello; // Uncaught ReferenceError: Cannot access 'hello' before initialization

let hello;
console.log(hello);

// Best Practices in Naming Variables

// 1. Descriptive
let movieTitle = "The Godfather"; // good
let pokemon = 25000; // bad

// 2. Start with a lowercase letter
let lastName = "Smith"; // good
let LastName = "Smith"; // bad

// 3. Use camelCase for variable names with multiple words
// let first name = "Mike";
let firstName = "Mike";

// 4. You can also use underscores, but always start with a lowercase letter.
let product_description = "High Quality";
let product_id = "123abc";
let Product_Id = "abc123";

console.log(product_description);
console.log(product_id);
console.log(Product_Id);

// 5. Avoid using reserved keywords as variable names.

// let new = "New Addition"; // Uncaught SyntaxError: Unexpected token 'new'
// console.log(new);

// const Variable
// const is used to declare a constant variable, meaning its value cannot be changed after it is assigned.

const interest = 3.539;
console.log(interest);

// interest = 4.489;
// console.log(interest); // Uncaught TypeError: Assignment to constant variable.

// const pi; // Uncaught SyntaxError: Missing initializer in const declaration
// pi=3.1416;
// console.log(pi);

// Data Types in JavaScript

// Strings are used to represent text
let myString = ''; // empty string
let country = 'Philippines';
let province = "Metro Manila";
let message = "I'm learning JavaScript";
let greeting = 'They said "hello" to me.';
console.log(myString);
console.log(country);
console.log(province);
console.log(message);
console.log(greeting);

// Numbers are used for mathematical operations

// Integers/Whole Numbers
let myNumber = 1;
let headCount = 16;

console.log(myNumber);
console.log(headCount);

// Decimal Numbers/Fractions
let grade = 98.7;

console.log(grade);

// Booleans are used to represent true or false values.

let isMarried = false;
let inGoodConduct = true;

console.log(isMarried);
console.log(inGoodConduct);

// Null means the value is intentionally empty

let spouse = null;

console.log(spouse);

// Undefined means a variable was declared but was not assigned a value.

let fullName;

console.log(fullName);

// Arrays
// Arrays are used to group data of similar data types

let grades = [98.7, 92.1, 90.2, 94.6];
console.log(grades);

const students = ["Dennis", "Eugene", "Vincent", "Alfred"];
console.log(students);

// Objects
// Objects represent real-world things using key-value pairs to describe their properties.

let person = {
	fullName: 'Juan Dela Cruz',
	age: 35,
	isMarried: false,
	contact: ["+639123456789", "+639987654321"],
	address: {
		houseNumber: '345',
		city: 'Manila'
	}
};

console.log(person);




