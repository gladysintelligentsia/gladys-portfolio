// Selecting elements from the DOM and assigning them to variables
const txtFirstName = document.querySelector('#txt-first-name');
const txtLastName = document.querySelector('#txt-last-name');
const spanFullName = document.querySelector('#span-full-name');

// Create a function that will update the span's contents 
// based on the value of BOTH the first and last name input fields.
function updateFullName() {
    // Get the current values of both inputs
    let firstName = txtFirstName.value;
    let lastName = txtLastName.value;

    // Set the innerHTML to the combination of both, separated by a space
    spanFullName.innerHTML = firstName + ' ' + lastName;
}

// Instruct the event listeners to use the created function.
txtFirstName.addEventListener('keyup', updateFullName);
txtLastName.addEventListener('keyup', updateFullName);