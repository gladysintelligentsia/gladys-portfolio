// task.js - this file defines a data model for tasks.

// Import Mongoose
// Mongoose is used to connect and interact with MongoDB
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({

	name: String,
	status: {
		type: String,
		default: "pending"
	}

});

// module - this current
// module.exports - export the module so it can be used in other files (controller)
module.exports = mongoose.model("Task", taskSchema);