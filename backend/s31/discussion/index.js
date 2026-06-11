// console.log("Hello world!");

// Non-Mutator Methods

// indexOf()
// The indexOf() method is used to find the position (index) of a specific element in an array.
// If the element exists, it returns the index number.
// If the element does NOT exist, it returns -1.
// indexOf() returns the index of the FIRST occurrence only

let countries = ['US', 'PH', 'CAN', 'SG', 'TH', 'FR', 'DE'];
console.log(countries);

/*
SYNTAX:
arrayName.indexOf(searchElement)
*/

console.log("Result of indexOf() method:");

let firstIndex = countries.indexOf('TH');
console.log(firstIndex);

let invalidCountry = countries.indexOf('BR');
console.log(invalidCountry);

console.log(countries);

// slice() Method
// slice() is a non-mutator method that returns a portion of an array without modifying the original array.
/*
SYNTAX:
arrayName.slice(startIndex, endIndex)
*/

// startIndex - the index where slicing begins (included)
// endIndex - the index where slicing stops (not included)

// ['US', 'PH', 'CAN', 'SG', 'TH', 'FR', 'DE']

console.log('Result from slice() method:')

let slicedArrayA = countries.slice(2, 4);
console.log(slicedArrayA);

console.log(countries);

let slicedArrayB = countries.slice(2);
console.log(slicedArrayB);

let slicedArrayC = countries.slice(-3);
console.log(slicedArrayC);

// Positive index - from start (left to right)
// Negative index - from end (right to left)
let slicedArrayD = countries.slice(1, -1);
console.log(slicedArrayD);

// concat() method
// concat() is a non-mutator method that combines arrays or elements and returns a new array without modifying the original arrays.

/*
SYNTAX:
arrayNameA.concat(arrayB)
arraynameA.concat(elementA)
*/

let tasksArrayA = ['drink html', 'eat javascript'];
let tasksArrayB = ['inhale css', 'breathe sass'];
let tasksArrayC = ['get git', 'be node'];

console.log('Result from concat() method:')

// Combining two arrays
let tasks = tasksArrayA.concat(tasksArrayB);
console.log(tasks);

// Combining multiple arrays
let allTasks = tasksArrayA.concat(tasksArrayB, tasksArrayC);
console.log(allTasks);

// Combining arrays with elements
let combinedTasks = tasksArrayA.concat('smell express', 'throw react');
console.log(combinedTasks);

console.log(tasksArrayA);
console.log(tasksArrayB);
console.log(tasksArrayC);

// Iteration Methods
// Iterator Methods allow us to loop over elements/items in an array and perform tasks with them.

// forEach()
// forEach() is an iterator method that runs a function for every element in an array.
// It is similar to using a loop.
/*
SYNTAX:
arrayName.forEach(function(element){
    statement
})
*/

// ['drink html', 'eat javascript', 'inhale css', 'breathe sass', 'get git', 'be node']

// forEach() loops through every element of the array
// The parameter (task) temporarily holds the current item during each loop iteration
allTasks.forEach(function(task) {
	console.log(task);
})

// Using forEach() with conditional statement

// ['drink html', 'eat javascript', 'inhale css', 'breathe sass', 'get git', 'be node']

// Empty array that will store tasks with > 10 characters
let filteredTasks = [];

// Loop through each tasks in the allTasks array
allTasks.forEach(function(task){

	// Check if the task length is greater than 10 characters
	if (task.length > 10) {
		// If true, add the task to the filteredTasks array
		filteredTasks.push(task);
	}
})

console.log("Result of Using forEach() with conditional statements:");
console.log(filteredTasks);
console.log(allTasks);

// Using forEach() with array of objects

let adminList = [];

// Array of user objects

let users = [
	{
		username: "peterSmith",
		isAdmin: false
	},
	{
		username: "andrewJones99",
		isAdmin: true
	},
	{
		username: "alexMartin",
		isAdmin: false
	},
	{
		username: "smithyS",
		isAdmin: true
	},
];

// Loop through each user object in the users array
users.forEach(function(user) {

	// Check if the user is an admin
	if (user.isAdmin === true) {
		// If true, add the username to the adminList array
		adminList.push(user.username);
	}
})

console.log(adminList);

// map() method
// map() is an iteration method that loops through each element in an array and returns a NEW array with modified values based on the function provided.

/*
SYNTAX:
let/const resultArray = arrayName.map(function(indivElement){
    return newValue
})
*/

let numbers = [1, 2, 3, 4, 5];

// Loop through each number and return its square
let numberMap = numbers.map(function(number) {

	// square the current number and return it
	return number * number;

})

console.log(numbers);

console.log('Result of map() method:');
console.log(numberMap);


// map() vs forEach
// Loop through each number and return its square
let numberForEach = numbers.forEach(function(number) {

	// square the current number and return it
	return number * number;

})

console.log(numberForEach);

// every() method
// every() is an iterator method that checks if ALL elements in an array meet a specified condition. It returns true only if every element passes the condition.

/*
SYNTAX:
let/const result = arrayName.every(function(indivElement){
    return condition
})
*/

let grades = [86, 85, 74, 90];

// Check if all grades are passing (>=75)
let allPassingGrade = grades.every(function(grade) {

	console.log(grade);

	// return true if all the grades are passing
	return grade >= 75;

})

console.log('Result of every() method:');
console.log(allPassingGrade);

// filter() method
// filter() is an iterator method that returns a NEW array containing elements that meet a specified condition.
/*
SYNTAX:
let/const resultArray = arrayName.filter(function(indivElement){
    return condition
})
*/

// let numbers = [1, 2, 3, 4, 5];

let filterValid = numbers.filter(function(number) {

	// return numbers less than 3
	return number < 3;

})

console.log('Result of filter() method:');
console.log(filterValid);

let nothingFound = numbers.filter(function(number) {

	// check if number is equal to 0
	return number === 0;

})

console.log('Result of filter() method:');
console.log(nothingFound);

let movies = [

    {
        name: "The Godfather",
        rating: 5
    },
    {
        name: "Star Wars IV: A New Hope",
        rating: 4
    },
    {
        name: "Schindler's List",
        rating: 5
    }

];

let fiveStarMovies = movies.filter(function(movie) {

	return movie.rating > 4;

})

console.log(fiveStarMovies);