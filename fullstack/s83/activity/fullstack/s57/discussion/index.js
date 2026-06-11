// Selecting elements from the DOM and assigning them to variables
const txtFirstName = document.querySelector('#txt-first-name');
const txtLastName = document.querySelector('#txt-last-name');
const spanFullName = document.querySelector('#span-full-name');

// Create a function that will update the span's contents 
// based on the value of the first and last name input fields.
function updateFullName() {
    // innerHTML sets the HTML content inside the span element.
    // We combine both values with a space in between.
    spanFullName.innerHTML = `${txtFirstName.value} ${txtLastName.value}`;
}

// Instruct the event listeners to use the created function.
// Note: We pass the function name without parentheses () 
// so it only runs when the event triggers.
txtFirstName.addEventListener('keyup', updateFullName);
txtLastName.addEventListener('keyup', updateFullName);