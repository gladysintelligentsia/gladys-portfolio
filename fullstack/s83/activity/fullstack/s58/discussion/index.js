// Axios
// Axios lets your frontend app send requests to an API (like GET or POST) and receive data (like JSON) in return.
// Axios helper methods usually start with the HTTP verb (get, post, put, delete).

// axios.get() - used to request data from a server
axios.get("https://jsonplaceholder.typicode.com/posts")
//  .then() - runs after the request successful
.then(response => {
	// Logs the data
	// console.log(response.data);
	showPosts(response.data);
})

let postEntries = '';

// Show Posts
const showPosts = (posts) => {

	// Loop through each post in the array
	posts.forEach((post) => {

		postEntries += `
			<div id="post-${post.id}">
	            <h3 id="post-title-${post.id}">${post.title}</h3>
	            <p id="post-body-${post.id}">${post.body}</p>
				<button onclick="editPost('${post.id}')">Edit</button>
				<button onclick="deletePost('${post.id}')">Delete</button>
        	</div>
		`
	})
	// onclick is an HTML attribute
	// When the button is clicked, the function editPost() or deletePost() is executed with post.id as an argument

	// console.log(postEntries);
	document.querySelector('#div-post-entries').innerHTML = postEntries;
}

// Add Posts
document.querySelector('#form-add-post').addEventListener('submit', (event) => {

	// Prevent the default form behavior (page reload)
	event.preventDefault();

	// Select the input fields for title and body
	let titleInput = document.querySelector('#txt-title');
	let bodyInput = document.querySelector('#txt-body');

	console.log(titleInput.value);
	console.log(bodyInput.value);
	// console.log("Hello! The form has been submitted!");

	// Send a POST request using AXIOS
	axios({
		// HTTP method used to add data to the server
		method: 'post',
		// API endpoint where data will be sent
		url: 'https://jsonplaceholder.typicode.com/posts',
		// Data to be sent to the server (request body)
		data: {
			// get value from the title input
			title: titleInput.value,
			// get value from the body input
			body: bodyInput.value,
			// sample user ID
			userId: 1
		},
		headers: {
			// application/json - is used in HTTPS requests to tell the server the format of the data being sent
			'Content-type': 'application/json'
		}
	})
	// Runs after the request is successful
	.then((response) => {

		// Axios already parses the response into JS Object
		console.log(response.data);
		// Show success message to the user
		alert('Successfully added.');

		// Clear the input fields after submission
		titleInput.value = null;
		bodyInput.value = null;
	})
})

// Edit Post

const editPost = (id) => {

	// Get the current title of the selected post using its id
	let title = document.querySelector(`#post-title-${id}`).innerHTML;
	// Get the current body of the selected post using its id
	let body = document.querySelector(`#post-body-${id}`).innerHTML;

	// Set the post id in the hidden input field for editing reference
	document.querySelector('#txt-edit-id').value = id;
	// Fill the edit title input with the select post's title
	document.querySelector('#txt-edit-title').value = title;
	// Fill the edit body input with the select post's body
	document.querySelector('#txt-edit-body').value = body;

	// Enable the Edit button so user can submit changes
	document.querySelector('#btn-submit-update').removeAttribute('disabled');
}