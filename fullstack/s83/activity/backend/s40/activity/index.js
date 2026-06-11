// Initialize Node Package Manage
// Open a Git Bash terminal in the folder where your index.js file is located, then run:
    // npm init -y
// Install Express
    // npm install express
// Add the node_modules folder to the .gitignore file to prevent it from being tracked by Git

// Import the Express framework
// Express is Node.js framework used to simplify server creation and routing
const express = require("express");

// express() is a function from Express.js that creates an application.
// "app" will be used to manage routes and settings
const app = express();

// Define the port number where the server will listen
// port is a number that identifies a specific application on a computer
// It acts like a "door" where requests are sent and received
const port = 4000;

// .use() - tells Express to always run this before handling any request
// Middleware - a function that runs before your route
// express.json() - lets the server read JSON data from the request
app.use(express.json());

// 'express.urlencoded()' - allows the server to read form data like data from HTML forms or Postman form inputs
// 'extended: true' - allows more complex data like objects and arrays
app.use(express.urlencoded({extended: true}));

// 'app' - your server
// '.get()' - HTTP method (used to get data)
// "/" - route (homepage)
// 'req' - request (data from client)
// 'res' - response (what we send back)
app.get("/", (req, res) => {
    // 'res.send()' - sends response to client
    res.send("Hello World!");
});

app.get("/hello", (req, res) => {
    res.send("Hello from the /hello endpoint!");
});

// Simulate user registration

// This will act as our mock database (temporary storage for testing)
let users = [];

app.post("/register", (req, res) => {

    if (req.body.username !== '' && req.body.password !='') {
        users.push(req.body);

        res.send(`User ${req.body.username} succesfully registered!`);
    } else {
        res.send("Please input BOTH username and password.");
    }

});

// 2. Create a PUT route to change the password
app.put("/change-password", (req, res) => {
    let message = "User does not exist";
    const { username, password } = req.body;

    // Use a loop to iterate over the users array
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            // Update the password property
            users[i].password = password;
            message = `User ${username}'s password has been updated.`;
            break; // Stop loop once found
        }
    }

    res.send(message);
});

// 4. Create a POST route to find a specific user
app.post("/find-user", (req, res) => {
    const { username } = req.body;

    // Check if username exists in request body
    if (!username) {
        return res.status(400).send("Username is required in the request body");
    }

    // 5. Use the find method to search for the user
    const foundUser = users.find(user => user.username === username);

    // 6 & 7. Return user details if found, otherwise 404
    if (foundUser) {
        res.json(foundUser);
    } else {
        res.status(404).send(`User with username "${username}" not found.`);
    }
});

// 9. Create a DELETE route to remove the last user
app.delete("/delete-user", (req, res) => {
    // 10. Check if there are users in the array
    if (users.length > 0) {
        // 11. Remove the last user from the array
        users.pop();
        res.send(users);
    } else {
        // 12. Return message if array is empty
        res.send("Users collection is empty.");
    }
});

// require.main - the file that was run using "node"
// module - this current file
// Start the server ONLY if this file is run directly using "node"
// This prevents the server from starting automatically when imported, avoids errors like "port already in use", and makes the code reusable
if (require.main === module) {
    app.listen(port, () => console.log(`Server running at port ${port}.`));
}

// Export the app so it can be used in other files (for testing and reuse)
module.exports = { app };