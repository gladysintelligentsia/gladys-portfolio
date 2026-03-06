// console.log("Hello world!");

// Operators

// Arithmetic Operators used for mathematical calculations.

let x = 100;
let y = 20;

let sum = x + y;
console.log("Result of addition operator: " + sum);

let difference = x - y;
console.log("Result of subtraction operator: " + difference);

let product = x * y;
console.log("Result of multiplication operator: " + product);

let quotient = x / y;
console.log("Result of division operator: " + quotient);

// Assignment Operators used to assign values to variables

// Basic Assignment Operator (=)
let assignmentNumber = 8;

// Addition Assignment Operator (+=)

assignmentNumber = assignmentNumber + 2;
console.log("Result of addition assignment operator: " + assignmentNumber);

// Shorthand for Addition Assignment Operator 

assignmentNumber += 200;
console.log("Result of addition assignment operator: " + assignmentNumber);

// E-commerce App
let totalAmount = 0;
totalAmount += 1500;
console.log(totalAmount);
totalAmount += 500;
console.log(totalAmount);

// Subtraction Assigment Operator (-=)

assignmentNumber -= 10;
console.log("Result of subtraction assignment operator: " + assignmentNumber);

// Others: Multiplication (*=), Division (/=)

// Increment (++) and Decrement (--)
// Operators that add or subtract 1 from a variable and reassign the updated value to the variable.

let z = 1;

// Pre-increment
// ++z increase before using the value
let increment = ++z;

console.log("Result of Increment :" + increment); // Result: 2

// Post-increment
// z++ increase after using the value
increment = z++;

console.log(z);

console.log("Result of Increment :" + increment); // 2

// Pre-decrement
// --z decrease the value first before it is used
let decrement = --z; // z = 3 - 1

console.log("Result of Decrement :" + decrement); // Result: 2

// Post-decrement
// z-- use the current value first, then decrease it
decrement = z--;

console.log(z);

console.log("Result of Decrement :" + decrement);

// Type Coercion
// JavaScript automatically converts one data type to another so operations between different types can work.

let numA = '10';
let numB = 12;

// If one of the value is a string, JS converts the number into a string
let coercion = numA + numB;
console.log(coercion);
console.log(typeof coercion);

// When a Boolean is used in a numeric operation, JS converts it into a number.
// true becomes 1
// false becomes 0
let coercionTrue = true + 1;
console.log(coercionTrue);

let coercionFalse = false + 1;
console.log(coercionFalse);

// Comparison Operators

// Strict Equality Operator
// Checks if two values are equal and have the same data type

console.log("Result of strict equality operator: ");
console.log(1 === 1);
console.log(1 === 2);
console.log(1 === '1');
console.log('juan' === 'juan');
console.log(0 === false);

// Strict Inequality Operator

console.log("Result of strict inequality operator: ");
console.log(1 !== 1); // false
console.log(1 !== 2); // true
console.log(1 !== '1'); // true
console.log('juan' !== 'juan'); // false
console.log(0 !== false); // true

// Relational Operators
// Relational operators check the relationship between values.

let a = 50;
let b = 65;

// Greater than (>)
let isGreaterThan = a > b;

// Less than (<)
let isLessThan = a < b;

// GT or Equal (>=)
let isGTorEqual = a >= b;

// LT or Equal (<=)
let isLTorEqual = a <= b;

console.log("Result of Relational Operators:");
console.log(isGreaterThan);
console.log(isLessThan);
console.log(isGTorEqual);
console.log(isLTorEqual);

let numStr = "30";
// a = 50
// numStr = 30
console.log(a > numStr); // true - string "30" is converted to number

let str = "twenty";
// twenty - NaN
console.log(b >= str);

// Logical Operators
// Logical operators are used to combine or modify boolean values (true or false).

let isLegalAge = true;
let isRegistered = false;

// Logical AND (&&) - true if both values are true
let allRequirementsMet = isLegalAge && isRegistered;
console.log("Logical AND: " + allRequirementsMet);

// Logical OR (||) = true if at least one value is true
let someRequirementsMet = isLegalAge || isRegistered;
console.log("Logical OR: " + someRequirementsMet);

// LOGICAL NOT (!) - returns the opposite value
let someRequirementsNotMet = !isRegistered;
console.log("LOGICAL NOT: " + someRequirementsNotMet);