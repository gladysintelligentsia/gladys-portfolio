// console.log("Hello world!");

// Manipulating Arrays with Array Methods
// JavaScript provides built-in functions and methods that allow developers to work with arrays easily. 
// These methods help us access, modify, and process the elements stored inside an array.
/*
There are three main types of JavaScript Array Methods:
- Mutator Methods
- Non-Mutator Methods
- Iterator Methods
*/

// Mutator Methods
// Mutator Methods modify the original array by adding, removing, or rearranging elements.

let fruits = ['Apple', 'Orange', 'Kiwi', 'Dragon Fruit'];

console.log(fruits);
console.log(fruits.length);

// push() Method
// push() is a mutator method that adds one or more elements to the END of an array
// It also returns the NEW length of the array after the element is added
// SYNTAX: arrayName.push();

let fruitsLength = fruits.push("Mango");
console.log(fruitsLength);

console.log('Mutated array from push() method:')
console.log(fruits);

fruits.push("Avocado", "Guava");
console.log(fruits);

// Function to add a fruit to the 'fruits array'

function addFruit(fruit) {

	fruits.push(fruit);

}

addFruit("Pineapple");
console.log(fruits);

// splice() Method
// splice() is a mutator method that can add, remove, or replace elements in an array.
/*SYNTAX: 
    arrayName.splice(startIndex, deleteCount, item1, item2, ...)
*/

// Current Array:
// ['Apple', 'Orange', 'Kiwi', 'Dragon Fruit', 'Mango', 'Avocado', 'Guava', 'Pineapple']

// startIndex - the index where the change begins
// deleteCount - number of elements to remove from the array
// Lime and Cherry - new elements that will replace Orange and Kiwi

fruits.splice(1, 2, "Lime", "Cherry");

console.log('Mutated array from splice() method:')
console.log(fruits);

// If you only want to ADD an element and NOT remove anything, set deleteCount to 0.
fruits.splice(1, 0, "Durian");
console.log(fruits);

// If you want to delete an element without replacing it, use splice() but do not add any items.
fruits.splice(4, 1);
console.log(fruits);

// If the deleteCount exceeds the remaining elements, JS remove all elements from the starting index
// fruits.splice(2, 100);
// console.log(fruits); // ['Apple', 'Durian']
// rest parameter (...) is used when a function needs to accept an unknown or variable number of arguments.
function spliceFruit(index, deleteCount, ...fruitsToAdd) {

	fruits.splice(index, deleteCount, ...fruitsToAdd);

}

// ['Apple', 'Durian', 'Lime', 'Cherry', 'Mango', 'Avocado', 'Guava', 'Pineapple']
spliceFruit(0, 0, "Melon", "blueberry");
console.log(fruits);

// pop() Method
// pop() is a mutator method that removes the LAST element from an array.
// It also returns the element that was removed.
/*
SYNTAX:
arrayName.pop()
*/

// ['Melon', 'Blueberry', 'Apple', 'Durian', 'Lime', 'Cherry', 'Mango', 'Avocado', 'Guava', 'Pineapple']

let removedFruit = fruits.pop();

console.log(removedFruit);

console.log('Mutated array from pop() method:')
console.log(fruits);

function removeFruit() {

	fruits.pop();

}

removeFruit();
console.log(fruits);

// sort() Method
// sort() is a mutator method that arranges the elements of an array in alphabetical order by default.
// It modifies (mutates) the original array.

/*
SYNTAX:
array.sort()
*/

fruits.sort();

console.log('Mutated array from sort() method:')
console.log(fruits);