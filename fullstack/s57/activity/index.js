// Document Object Model (DOM)
// The DOM is a structured representation of your HTML page.
// It allows JavaScript to access, modify, and control webpage elements.

// 'document' - represents the entire HTML page (DOM).
// 'querySelector()' - accepts a CSS-style selector string and returns the FIRST matching element.
// This works the same way CSS targets elements (e.g., #id, .class, tag).
// '#txt-first-name' - selects the element with id="txt-first-name"
document.querySelector('#txt-first-name');
// document.querySelector('.txt-name');
// document.querySelector('span');

// Alternatively, we can use getElement methods to select elements from the DOM.

document.getElementById('txt-first-name');
// document.getElementsByClassName('txt-name');
// document.getElementsByTagName('span');

// Selecting elements from the DOM and assigning them to variables
const txtFirstName = document.querySelector('#txt-first-name');
const spanFullName = document.querySelector('#span-full-name');

// 'addEventListener()' is a method used to listen for events on an element.
// An event is something that happens in the browser, like a click, typing on the keyboard, moving the mouse, submitting a form, etc.
// It accepts 2 main parameters:
    // Event (string) - This tells what to listen for like
        // keyup is an event that triggers when a user releases a key on the keyboard.
    // Function - code that runs when the event happens
txtFirstName.addEventListener('keyup', (event) => {
	// 'target' - built-in property that tells you which element triggered the event
	console.log(event.target);
	// Logs the value of the element that triggered the event
	console.log(event.target.value);
})

txtFirstName.addEventListener('keyup', (event) => {
	// innerHTML is a property that gets or sets the HTML content inside an element.
    // Assigning the value of txtFirstName input to the span
	spanFullName.innerHTML = txtFirstName.value;
})