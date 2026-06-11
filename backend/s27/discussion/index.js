// console.log("Hello World!");

// if Statement
// An if statement checks a condition.
// If the condition is true, the code inside the block will run.

/*
SYNTAX:
	if (condition) {
		statement;
	}
*/

let num1 = -1;

if (num1 < 0) {
	console.log("Hello");
}

// else if Clause
// Checks another condition if the previous condition is false.
// If the condition is true, the code inside the block will run.
// The "else if" clause is optional and can be used multiple times.

/*
SYNTAX:
	if (condition) {
		statement;
	} else if (condition) {
		statement;
	} else if (condition) {
		statement;
	} else if (condition) {
		statement;
	}
*/

num1 = 0;
let num2 = 1;

if (num1 < 0) {
	// This is will run only if num1 is less than 0
	console.log("Hello");
} else if (num2 > 0) {
	// This runs if the previous condition is FALSE AND num2 is greater than 0
	console.log("World");
}

// else Clause
// Runs when all previous conditions are false.
// Acts as the default action if no conditions above are met.
// The "else" clause is optional.

/*
SYNTAX:
	if (condition) {
		statement;
	} else if (condition) {
		statement;
	} else if (condition) {
		statement;
	} else if (condition) {
		statement;
	} else {
		statement;
	}
*/

num1 = 0;
num2 = 0;

if (num1 < 0) {
	// This is will run only if num1 is less than 0
	console.log("Hello");
} else if (num2 > 0) {
	// This runs if the previous condition is FALSE AND num2 is greater than 0
	console.log("World");
} else {
	// This runs if all previous conditions are false
	console.log("Again");
}

// Conditional statements can be used inside the functions to control program flow.

let message;

function determineTyphoonIntensity(windSpeed) {

	if (windSpeed < 30) {
		return 'Not a typhoon yet.';
	} else if (windSpeed <= 61) {
		return 'Tropical depression detected.';
	} else if (windSpeed >= 62 && windSpeed <=88) {
		return 'Tropical storm detected.';
	} else if (windSpeed >= 89 && windSpeed <= 117) {
		return 'Severe tropical storm detected.';
	} else {
		return 'Typhoon detected';
	}
}

// message = determineTyphoonIntensity(118);
// console.log(message);

message = determineTyphoonIntensity(67);
console.log(message);

// message = determineTyphoonIntensity(18);
// console.log(message);

if (message === 'Tropical storm detected.') {
	console.warn(message);
};

// Truthy and Falsy
// In JavaScript, a "truthy" value is treated as true in a Boolean context (such as in an if statement).
// Most values are truthy unless they belong to a small group called "falsy" values.
// Falsy values are: false, 0, -0, "", null, undefined, and NaN.

// Truthy Examples

if (true) {
	console.log("Truthy");
}

if (1) {
	console.log("Truthy");
}

if ("Hello") {
	console.log("Truthy");
}

if ({}) {
	console.log("Truthy");
}

// Falsy Examples

if (false) {
	console.log("Falsy");
}

if (0) {
	console.log("Falsy");
}

if (undefined) {
	console.log("Falsy");
}

if ("") {
	console.log("Falsy");
}

/*

if (email !== "" && email !== null && email !== undefined) {
	console.log("Email is valid");
}

if (email) {
	console.log("Email is valid");
}

*/

// Conditional (Ternary) Operator

// A shorthand way of writing a simple if...else statement.
// It evaluates a condition and returns one of two values.
// Commonly used for simple, single-line conditions.
/*
SYNTAX:
    condition ? expressionIfTrue : expressionIfFalse;
*/

let ternaryResult = (1 < 18) ? true : false;
console.log("Result of Ternary Operator: " + ternaryResult);

/*

let access = (role === "admin") ? "Admin Dashboard" : "User Dashboard";

*/

let name = "Jane";
let age = 17;

function isOfLegalAge() {
	return 'You are of the legal age limit';
}

function isUnderAge() {
	return 'You are under the age limit';
}

// condition ? expressionIfTrue : expressionIfFalse;
let legalAge = (age >= 18) ? isOfLegalAge() : isUnderAge();
console.log("Result of Ternary Operator ins functions: " + legalAge + ', ' + name);

// Try-Catch-Finally Statement
// Used to handle errors that may occur while the program is running.
// Allows developers to define what should happen if an error occurs.
// Useful for debugging because the error object provides details about the error.

function showIntensityAlert(windSpeed) {

	// The "try" block contains code that may cause an error
	try {
		// Attempt to execute code
		alert(determineTyphoonIntensity(windSpeeds));
	  // The "catch" block receives the error object and handles the error
	} catch (error) {
		console.log(typeof error);

		console.warn(error.message);
	  // The "finally" block (optional) runs after try and catch, regardless of the result
	} finally {
		alert('Intensity updates will show new alert.');
	}
}

showIntensityAlert(50);