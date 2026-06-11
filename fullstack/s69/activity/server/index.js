import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import gameRoutes from "./routes/game.js";
import userRoutes from "./routes/user.js";

// Database connection
mongoose.connect("mongodb+srv://gladysramos:admin123@cluster0.a3ucxcu.mongodb.net/?appName=Cluster0");
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Added this in case your client sends JSON payloads!
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/games", gameRoutes);
app.use("/users", userRoutes);

// Server setup
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`API is now online on port ${PORT}`);
});

// Export using ES Module syntax
export { app, mongoose };