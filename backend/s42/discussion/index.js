// IMPORTS
const express = require("express");
const mongoose = require("mongoose");

// Import the taskRoute file from the "routes" folder
// This file contains all the routes related to tasks
const taskRoute = require("./routes/taskRoute");

// APP INITIALIZATION
const app = express();
const port = 4000;

// DATABASE CONNECTION
mongoose.connect("mongodb://rizaayson:admin123@ac-veggqqm-shard-00-00.eqdqlnz.mongodb.net:27017,ac-veggqqm-shard-00-01.eqdqlnz.mongodb.net:27017,ac-veggqqm-shard-00-02.eqdqlnz.mongodb.net:27017/b606TaskDB?ssl=true&replicaSet=atlas-5ygc9l-shard-0&authSource=admin&appName=WDC028-Course-Booking");

let db = mongoose.connection; 

db.on("error", console.error.bind(console, "connection error"));

mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.')); 

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Model (Schema) → Controller (uses model & business logic) → Route (maps requests to controller) → Server (runs and connects everything)

// ROUTE CONNECTION
// http://localhost:4000/tasks
// Use the taskRoute for all requests that start with "/tasks"
// This connects the routes defined in taskRoute to the main app
app.use("/tasks", taskRoute);


// SERVER START
if(require.main === module){
    app.listen(port, () => console.log(`Server running at port ${port}`));
}

// EXPORTS
module.exports = {app, mongoose};