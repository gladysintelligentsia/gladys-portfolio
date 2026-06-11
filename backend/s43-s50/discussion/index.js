// IMPORTS
// Load environment variables from a .env file into 'process.env'
// This allows you to store sensitive data securely
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

// Import CORS
// This allows your backend API to accept requests from other origins
const cors = require("cors");

/*S43 ACTIVITY SOLUTION START*/
const userRoutes = require("./routes/user");
const courseRoutes = require("./routes/course");
/*S43 ACTIVITY SOLUTION END*/

// APP INITIALIZATION
const app = express();
// const port = 4000;
// Initialize dotenv and load all variables from the .env file into 'process.env'
dotenv.config();

// DATABASE CONNECTION
// process - process is the running Expres/Node.js application
// .env - environment (settings/variables)
mongoose.connect("mongodb://gladysramos:admin123@ac-rqp1qu2-shard-00-00.a3ucxcu.mongodb.net:27017,ac-rqp1qu2-shard-00-01.a3ucxcu.mongodb.net:27017,ac-rqp1qu2-shard-00-02.a3ucxcu.mongodb.net:27017/b606ToDoApp?ssl=true&replicaSet=atlas-y6h2k5-shard-0&authSource=admin&appName=Cluster0")

let db = mongoose.connection; 

db.on("error", console.error.bind(console, "connection error"));

mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.')); 

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS - is a browser security rule that controls who is allowed to access your server from another website/frontend
// Define CORS configuration options
const corsOptions = {
    // Allow requests only from this frontend
    origin: ['http://localhost:8000'],
    // Allow cookies, authorization headers, or login sessions
    credentials: true,
    // Use 200 to tell the browser it's OK to continue the request because some browsers fail if its not 200
    optionSuccessStatus: 200
}

// Apply CORS settings so the browser can access this API from allowed origins, because requests from different ports/domains are blocked by default
app.use(cors(corsOptions));


/*S43 ACTIVITY SOLUTION START*/
app.use("/users", userRoutes);
app.use("/courses", courseRoutes);
/*S43 ACTIVITY SOLUTION END*/


// SERVER START
if(require.main === module){
    app.listen(process.env.PORT || 3000, () => console.log(`Server running at port ${process.env.PORT || 3000}`));
}

// EXPORTS
module.exports = {app, mongoose};
