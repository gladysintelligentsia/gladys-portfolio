const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/task");
const userRoutes = require("./routes/user");

mongoose.connect("mongodb+srv://admin:admin@batch582-mortel.axxxqub.mongodb.net/task-app?appName=Batch582-Mortel");
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'))

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/tasks", productRoutes);
app.use("/users", userRoutes);

app.listen(process.env.PORT || 4000, () => {
    console.log(`API is now online on port ${ process.env.PORT || 4000 }`)
});

module.exports = { app, mongoose };
