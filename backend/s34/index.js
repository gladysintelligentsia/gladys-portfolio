// console.log("Hello World!");

// JSON (JavaScript Object Notation)
// A format used to store and transfer data.
// It is language-independent and used in many programming languages.
// Key-Value Pair

// JSON Object
// Uses curly braces { }
// Contains key and value pairs
// Keys must be in double quotes

/*
SYNTAX:
{
  "propertyA": "valueA",
  "propertyB": "valueB"
}
*/

// {
// 	"city": "Quezon City",
// 	"province": "Metro Manila",
// 	"country": "Philippines"
// }

// JSON Arrays
// Uses square brackets [ ]
// Store multiple values
/*
SYNTAX:
"key": [ value1, value2, value3 ]
*/

// Key
// "cities": [
// 	Value: Array of objects
// 	{ "city": "Quezon City", "province": "Metro Manila", "country": "Philippines" },
// 	{ "city": "Manila City", "province": "Metro Manila", "country": "Philippines" },
// 	{ "city": "Makati City", "province": "Metro Manila", "country": "Philippines" },
// ]

// JSON Methods
// JSON methods are used to convert data between JavaScript objects/array and JSON strings for easy data transfer.

// JS Array containing objects
let batchesArray = [{ batchName: 'Batch X' }, { batchName: 'Batch Y' }];
console.log(batchesArray);

// JSON.stringify()
// JSON.stringify() is a built-in method in JS that converts JS Object/Array into JSON string (JSON Object/Array)

/*
SYNTAX:
JSON.stringify(value);
*/

console.log('Result from stringify method:');
// Converts the JS array into JSON string
console.log(JSON.stringify(batchesArray));

// JS Objects
let data = JSON.stringify({
	name: 'Juan',
	age: 31,
	address: {
		city: 'San Juan',
		country: 'Philippines'
	}
})

console.log(data);

// JSON String
// Data is in string format (commonly received from the server)

let batchesJSON = `[{ "batchName": "Batch X"}, { "batchName": "Batch Y"}]`;

// JSON.parse()
// JSON.parse() is a built-in method in JavaScript that converts a JSON string into a JavaScript object or array.
// JSON.parse() is used when receiving data from backend (server).

/*
SYNTAX: 
JSON.parse(string);
*/

console.log('Result from parse method:');
console.log(JSON.parse(batchesJSON));

let stringifiedObject = `{ "name": "Juan", "age": 31, "address": { "city": "San Juan", "country": "Philippines" } }`;
console.log(JSON.parse(stringifiedObject));

// Real-world Example:

// Frontend
// Username and Password

// User input from Frontend
let username = "user123";
let password = "1234";

let loginRequest = JSON.stringify({
	username: username,
	password: password
})

console.log(loginRequest);

// Data received from the server
let loginResponse = `{
	"username": "user123",
	"isLoggedIn": "true"
}`;

console.log(JSON.parse(loginResponse));