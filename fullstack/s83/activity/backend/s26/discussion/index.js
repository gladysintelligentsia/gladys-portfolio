// console.log("Hello World!");

// Function Parameter
// We can pass data directly into a function.
// A parameter is a named variable inside a function that receives the passed data.
// It acts as a temporary container for the value provided when the function is called.
/*
SYNTAX:
	function functionName(parameter) {
		code block (statement);
	}
*/

function printMyName(name) {
	console.log("My name is " + name);
}

printMyName(); // Output: My name is undefined

printMyName("Juana");
printMyName("Riza");
printMyName("Jane");

let sampleVariable = "Jane";
console.log(sampleVariable);

// Variables as Arguments
// This allows functions to use dynamic data generated from other parts of the program.
// Using variables instead of hard-coded values makes functions more reusable and flexible.
printMyName(sampleVariable);

// From S24 Activity

let num7 = 165;
let remainder1 = num7 % 8;
console.log("The remainder of " + num7 + " divided by 8 is: " + remainder1);

let isDivisibleBy8 = remainder1 === 0;
console.log("Is " + num7 + " divisible by 8?");
console.log(isDivisibleBy8);

let num8 = 40;
let remainder2 = num8 % 8;
console.log("The remainder of " + num8 + " divided by 8 is: " + remainder2);

let isDivisibleBy8a = remainder2 === 0;
console.log("Is " + num8 + " divisible by 8?");
console.log(isDivisibleBy8a);

// Divisibility Checker using Functions


function checkDivisibilityBy8(num) {

	let remainder = num % 8;
	console.log("The remainder of " + num + " divided by 8 is: " + remainder);

	let isDivisibleBy8 = remainder === 0;
	console.log("Is " + num + " divisible by 8?");
	console.log(isDivisibleBy8);

}

checkDivisibilityBy8(64);
checkDivisibilityBy8(28);
checkDivisibilityBy8(40);
checkDivisibilityBy8(80);

// Multiple Parameters
// JS functions can accept multiple parameters
// Arguments are assigned to parameters based on their order, not their names

function createFullName(firstName, middleName, lastName) {

	console.log(firstName + ' ' + middleName + ' ' + lastName);

}

// "Jane" will be stored in the parameter "firstName"
// "Smith" will be stored in the parameter "middleName"
// "Doe" will be stored in the parameter "lastName"

createFullName("Jane", "Smith", "Doe"); // Jane Smith Doe
createFullName("Doe", "Smith", "Jane"); // Doe Smith Jane

// Using Variables as arguments
let firstName = "Maria";
let middleName = "Dela";
let lastName = "Cruz";

createFullName(firstName, middleName, lastName);


// Providing more or fewer arguments than the expected parameters in JS will not cause an error.
// In some other programming languages, this would cause an error because the number of arguments must match the parameters.
createFullName("Jane", "Smith"); 
createFullName("Jane", "Smith", "Doe", "Hello");

// The order of the arguments must match the order of the parameter.
// The first argument is assigned to the first parameter, the second argument to the second parameter, the third argument to the third parameter
function printFullName(middleName, firstName, lastName) {
	console.log(firstName + ' ' + middleName + ' ' + lastName);
}

printFullName("Smith", "Jane", "Doe");