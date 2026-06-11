const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const auth = require("../auth");

// Register a new user
router.post("/register", async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Hash the password for security
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = new User({
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).send({ message: "Registered successfully" });
    } catch (error) {
        res.status(500).send({ error: "Registration failed" });
    }
});

// User login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(404).send({ message: "User not found" });

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) return res.status(401).send({ message: "Incorrect password" });

        // Generate token upon successful login
        res.status(200).send({ auth: auth.createAccessToken(user) });
    } catch (error) {
        res.status(500).send({ error: "Login failed" });
    }
});

// Get user details
router.get("/details", auth.verify, async (req, res) => {
    try {
        const { id } = auth.decode(req.headers.authorization);
        const user = await User.findById(id).select("-password"); // Exclude password from response
        res.status(200).send({ user });
    } catch (error) {
        res.status(500).send({ error: "Failed to fetch user details" });
    }
});

module.exports = router;