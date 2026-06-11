const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Ensure these match your file names exactly
const auth = require("./auth"); 
const workoutRoutes = require("./routes/workout");
const userRoutes = require("./routes/user");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/users", userRoutes);
app.use("/workouts", workoutRoutes);

// Add this health-check route
app.get('/', (req, res) => {
    res.send('Fitness API is online and working!');
});

if (require.main === module) {
    mongoose.connect(process.env.MONGODB_STRING);
    mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));

    app.listen(process.env.PORT || 4000, () => {
        console.log(`API is now online on port ${process.env.PORT || 4000}`);
    });
}

module.exports = { app, mongoose };