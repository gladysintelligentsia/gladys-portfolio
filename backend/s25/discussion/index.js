// console.log("Hello world!");

// Functions
// Functions in JavaScript are blocks of code that tell a program to perform a specific task when they are called or invoked.

/*
SYNTAX:
	function functionName() {
		code block (statement);
	}
*/

// function keyword - used to define a JS function
// sayHello - name of the function
// {} - contains the statements
function sayHello() {
	console.log("Hello world!");
}

// Invocation
// The code inside a function is not executed when the function is defined.
// It only runs when function is invoked or called.
sayHello();

// We cannot invoke or call a function that has not yet been declared because the program does not yet know that the function exists.
// declaredFunction(); // Uncaught ReferenceError: declaredFunction is not defined

// Functions allow us to group statements together so they can be reused anytime in the program.
function displayCarInfo() {
	console.log("Brand: Toyota");
	console.log("Type: Sedan");
	console.log("Price: 1,500,000");
}

displayCarInfo();

// Function Naming Conventions

// Function names in JS are case-sensitive, should follow camelCase.

// Avoid generic names to avoid confusion within your code.
// Jordan could be person's name, country, and a brand
function displayName() {
	let name = "Jordan";
	console.log(name);
}

displayName();

// Use descriptive function names that clearly indicate what function will display or perform.

function displayCourses() {
	let courses = ["Science 101", "Math 101", "English 101"];
	console.log(courses);
}

displayCourses();

// Avoid using unclear function names.
function foo() {
	console.log(25%5);
}

foo();

function displayModulo() {
	console.log(25%5);
}

displayModulo();

// Understanding Scope in JavaScript

// Scope
// It sets the boundaries that control the visibility and accessibility of variables in JavaScript.
// Types of Scope: Global and Local

// Global Scope
// These variables can be accessed anywhere in the program.

const globalVariable = "I'm a GLOBAL variable!";

function displayGlobalVariable() {
	
	console.log(globalVariable);

}

displayGlobalVariable();
console.log(globalVariable);

// Local Scope
// Local scope refers to variables that are accessible only within a specific part of the program.
// There are two types of local scope: function scope and block scope.

// Function Scope
// Variables declared inside a function can only be accessed within that function.
function localFunctionVariable() {

	const localVariable = "I'm a LOCAL variable!";
	console.log(localVariable);

}

localFunctionVariable();
// console.log(localVariable); // Uncaught ReferenceError: localVariable is not defined

// Block Scope
// Block scope refers to variables declared inside a block {}.
// These variables can only be accessed within that block.

{
	const blockVariable = "I'm a LOCAL (Block Scope) variable!";
	console.log(blockVariable);
}

// console.log(blockVariable); // Uncaught ReferenceError: blockVariable is not defined

// Return Statement
// The return statement allows a function to send a value back to the part of the program that called or invoked the function.

function returnFullName() {

	return "Jane" + " " + "Smith" + " " + "Doe";

}

returnFullName();

console.log(returnFullName());

let fullName = returnFullName();
console.log(fullName);

// Return vs Console.log()

// return Statement
// Use "return" when you want the function's result to be used later in the program (stored, modified, or passed to other functions).

function returnFullAddress() {

	let fullAddress = {
		street: "#123 Sesame St.",
		city: "Cainta",
		province: "Rizal"
	};

	return fullAddress;

}

returnFullAddress();
let myAddress = returnFullAddress();
console.log(myAddress);

// console.log()
// Use "console.log()" when you only want to display information in the console for output or debugging, but the value cannot be reused outside the function.

function printFullAddress() {

	let fullAddress = {
		street: "#123 Sesame St.",
		city: "Cainta",
		province: "Rizal"
	};

	console.log(fullAddress);

}

printFullAddress();

let address = printFullAddress();
console.log(address);

// Additional Examples:

function returnSumOf5and10() {
	return 5 + 10;
}

let sumOf5and10 = returnSumOf5and10();
console.log(sumOf5and10);

let total = 100 + sumOf5and10;
console.log(total);

// Simulates getting an array of fruits from a database

function getFruits() {

	return ["apple", "banana", "mango", "orange", "grape"];

}

console.log(getFruits());