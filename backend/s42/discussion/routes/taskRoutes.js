// taskRoutes.js - handles incoming HTTP requests (GET, POST, PUT, DELETE).
// It forwards requests to the controller and returns responses to the client.

// Import the Express framework
// Express is used to create routes and handle HTTP requests
const express = require("express");

// express.Router(); - creates a route handler
// This router will handle task-related routes
const router = express.Router();

// Import the taskController file
// This allows us to use functions like createTask
const taskController = require("../controllers/taskController");

// Define a POST route for Creating a Task
// router is used to create and manage routes
router.post("/", (req, res) => {
	// Call the createTask function from the controller
    // req.body contains the data sent by the client (e.g., { name: "Study" })
	taskController.createTask(req.body)

	// .then() is used after an async operation
    //  It runs when the operation is done and successful
    // res.send(resultFromController) - Send the result back to the client (Postman / frontend)
	.then(resultFromController => res.send(resultFromController));
})

// Define a GET route for Retrieving All Tasks
// This handles requests to retrieve all tasks
router.get("/", (req, res) => {

    // Call the controller function to get all tasks
    taskController.getAllTasks()

        // .then(resultFromController - wait for the controller to return a result
        // res.send(resultFromController) - Send the result back to the client (Postman / frontend)
        .then(resultFromController => res.send(resultFromController)
    );
});

// Define a DELETE route for deleting a task.
// This handles requests to delete a specific task using its ID
router.delete("/:id", (req, res) => {

    // req.params.id gets the "id" value from the URL
    // Example: DELETE /tasks/123 → id = "123"
    // Call the controller function to delete the task
    taskController.deleteTask(req.params.id)

        // .then(resultFromController - wait for the controller to return a result
        // res.send(resultFromController) - Send the result back to the client (Postman / frontend)
        .then(resultFromController => res.send(resultFromController)
    );

});

// Define a PUT route for updating a task
// This handles requests to update a specific task using its ID
router.put("/:id", (req, res) => {

    // req.params.id gets the "id" from the URL
    // Example: PUT /tasks/123 → id = "123"

    // req.body contains the updated data sent by the client
    // Example: { name: "Updated Task" }

    // Call the controller function to update the task
    taskController.updateTask(req.params.id, req.body)

        // .then(resultFromController - wait for the controller to return a result
        // res.send(resultFromController) - Send the result back to the client (Postman / frontend)
        .then(resultFromController => res.send(resultFromController)
    );

});

// Export the router so it can be used in other files (like server.js)
// This allows the main application (index.js) to access and use all the routes defined here
module.exports = router;