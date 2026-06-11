// Activity
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const recipeRoutes = require("./routes/recipe");
const userRoutes = require("./routes/user");

mongoose.connect("mongodb+srv://admin:admin123@zuittcourses.xzuaw5l.mongodb.net/debugging-1?retryWrites=true&w=majority&appName=ZuittCourses", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));

const app = express();

// Middleware to parse incoming JSON payloads
app.use(express.json());
app.use(cors());

app.use("/recipes", recipeRoutes);
app.use("/users", userRoutes);

// Changed app.start to app.listen
app.listen(process.env.PORT || 4000, () => {
    console.log(`API is now online on port ${ process.env.PORT || 4000 }`);
});

module.exports = { app, mongoose };