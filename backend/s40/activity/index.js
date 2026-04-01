// Import the Express framework
const express = require("express");

// Create the application
const app = express();

// Define the port number
const port = 4000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Mock Database
let users = [];

// --- Existing Discussion Routes ---

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/hello", (req, res) => {
	res.send("Hello from the /hello endpoint!");
});

app.post("/register", (req, res) => {
	if (req.body.username !== '' && req.body.password !== '') {
		users.push(req.body);
		res.send(`User ${req.body.username} succesfully registered!`);
	} else {
		res.send("Please input BOTH username and password.");
	}
});

// --- Activity s40 Routes ---

// 1. PUT route to change password
app.put('/change-password', (req, res) => {
    const { username, password } = req.body;
    let message = "User does not exist";

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            users[i].password = password;
            // Matches Screenshot 40: "User jdoe0901's password has been updated."
            message = `User ${username}'s password has been updated.`;
            break; 
        }
    }
    // Explicitly returning 200 status for the test
    res.status(200).send(message);
});

// 2. POST route to find a specific user
app.post('/find-user', (req, res) => {
    const { username } = req.body;

    // Requirement: 400 Bad Request if username is missing
    if (!username) {
        return res.status(400).send("Username is required in the request body");
    }

    // Use .find() to locate the user in the array
    const foundUser = users.find(user => user.username === username);

    if (foundUser) {
        // Matches Screenshot 41: Returns user object with 200 OK
        res.status(200).json(foundUser);
    } else {
        // Matches Screenshot 42: "User with username "jdoe" not found."
        res.status(404).send(`User with username "${username}" not found.`);
    }
});

// 3. DELETE route to remove the last user
app.delete('/delete-user', (req, res) => {
    if (users.length > 0) {
        // Remove the last user from the array
        users.pop();
        // Matches Screenshot 43: Returns updated array with 200 OK
        res.status(200).json(users);
    } else {
        // Matches Screenshot 44: "Users collection is empty."
        res.status(200).send("Users collection is empty.");
    }
});

// --- Server Entry Point ---

if (require.main === module) {
	app.listen(port, () => console.log(`Server running at port ${port}.`));
}

// Export the app for testing
module.exports = { app };