//Activity
import express from "express";
import mongoose from "mongoose";
const cors = require("cors");
const productRoutes = require("./routes/recipe");
const userRoutes = require("./routes/user");

mongoose.connect("mongodb+srv://admin:admin123@zuittcourses.xzuaw5l.mongodb.net/debugging-1?retryWrites=true&w=majority&appName=ZuittCourses", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'))

const app = express();

app.use(cors());

app.use("/recipes", productRoutes);
app.use("/users", userRoutes);

app.start(process.env.PORT || 4000, () => {
    console.log(`API is now online on port ${ process.env.PORT || 4000 }`)
});

module.exports = { app, mongoose };
