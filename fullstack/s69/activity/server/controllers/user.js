import User from "../models/User.js"; // Fixed case to capital 'User.js'
import bcrypt from "bcrypt";
import auth from "../auth.js";

// 1. Register User
const registerUser = (req, res) => {
    let newUser = new User({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    });

    return newUser.save()
        .then((user) => res.status(201).send({ message: "Registered Successfully" }))
        .catch(err => res.status(500).send({ error: "Error in saving" }));
};

// 2. Login User
const loginUser = (req, res) => {
    return User.findOne({ email: req.body.email })
        .then(result => {
            if (result == null) {
                return res.status(404).send({ error: "No Email Found" });
            } else {
                const isPasswordCorrect = bcrypt.compareSync(req.body.password, result.password);
                if (isPasswordCorrect) {
                    return res.status(200).send({ access: auth.createAccessToken(result) });
                } else {
                    return res.status(401).send({ error: "Email and password do not match" });
                }
            }
        })
        .catch(err => res.status(500).send({ error: "Error in find" }));
};

// 3. Get User Profile
const getProfile = (req, res) => {
    const userId = req.user.id;

    return User.findById(userId)
        .then(user => {
            if (!user) {
                return res.status(404).send({ error: 'User not found' }); // Added return here to prevent executing code below if user is null
            }
            user.password = undefined;
            return res.status(200).send({ user });
        })
        .catch(err => res.status(500).send({ error: 'Failed to fetch user profile', details: err }));
};

// Export all controllers for routes/user.js to read
export default {
    registerUser,
    loginUser,
    getProfile
};