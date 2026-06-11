// taskController.js - handles the logic of the application.
// It receives data from routes, processes it, and interacts with the Task model.

// Import the Task model from the models folder
// This allows us to use the schema we define (task.js)
const Task = require("../models/task");

// Export a function named createTask so it can be used in other files (like routes)
module.exports.createTask = (reqBody) => {

	// Create a new Task object based on the Task schema
    // "reqBody" contains the data sent from the client (e.g., Postman or frontend)
	let newTask = new Task({
		// Assign the value of "name" coming from the request body
        // Example: reqBody = { name: "Study Node.js" }
		name: reqBody.name
	})

	// Save the new task to the MongoDB database
	return newTask.save() // this returns the saved data

	// .then() is used after an async operation
	// It runs when the operation is done and successful
	// "result" contains the saved task data
	.then(result => result)
	// .catch() will catch the error and prevent the app from crashing
    // If there is an error, catch it and return false
	.catch(error => false)
}

// Export a function to get all tasks from the database
module.exports.getAllTasks = () => {
    
    // .find() is a Mongoose method used to retrieve documents from MongoDB.
    // Task.find({}) retrieves all documents from the "tasks" collection
    // {} means no filter → get everything
    return Task.find({})

        // .then() runs after the data is successfully fetched from the database
        .then(result => {

            // "result" contains an array of all task objects
            // Example: [{...}, {...}, {...}]
            return result;

        });
}


// Export a function to delete a task using its ID
module.exports.deleteTask = (taskId) => {
    
    // Task.findByIdAndDelete() finds a task by its ID and removes it from the database
    // "taskId" is the unique ID of the task to be deleted
    return Task.findByIdAndDelete(taskId)

        // .then() runs after the task is successfully deleted
        // "removedTask" contains the deleted task data (or null if not found)
        .then((removedTask) => removedTask)

        // .catch() handles errors during the delete operation
        // If an error occurs, return false
        .catch(err => false)

}

// Export a function to update a task using its ID and new data
module.exports.updateTask = (taskId, reqBody) => {
    
    // Find the task in the database using its ID
    return Task.findById(taskId).then((result, error) => {

        // Check if there is an error during finding
        if (error){
            console.log(error);
            return false;
        }

        // Update the task's name using the value from request body
        // Example: reqBody = { name: "Updated Task" }
        result.name = reqBody.name;

        // Save the updated task back to the database
        return result.save().then((updatedTask, saveErr) => {

            // Check if there is an error during saving
            if (saveErr){
                console.log(saveErr);
                return false;

            } else {

                // If successful, return the updated task data
                return updatedTask;

            }
        });
    });
}