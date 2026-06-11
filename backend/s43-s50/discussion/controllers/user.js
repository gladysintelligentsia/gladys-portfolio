const User = require("../models/User");
const bcrypt = require("bcryptjs");
// const auth = require("../auth");

const {createAccessToken, errorHandler} = require('../auth');

// Registers new user
module.exports.registerUser = (req, res) => {
    User.findOne({ email: req.body.email }).then(existingUser => {
        if (existingUser) {
            return res.send("Email already exists");
        }

        let newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            mobileNo: req.body.mobileNo
        });

        return newUser.save().then(savedUser => res.send(savedUser));
    }).catch(err => errorHandler(err, req, res));
};

// Login user
module.exports.loginUser = (req, res) => {
    User.findOne({ email: req.body.email })
    .then(result => {
        if (result === null) {
            return res.send(false);
        } else {
            const isPasswordCorrect = bcrypt.compareSync(req.body.password, result.password)

            if (isPasswordCorrect) {
                return res.send({access: createAccessToken(result)})
            } else {
                return res.send(false);
            }

        }
    })
    .catch(err => errorHandler(err, req, res));
};

// Get user profile
module.exports.getProfile = (req, res) => {

    return User.findOne({ _id: req.user.id })
    .then(result => {
        if (result) {
            result.password = "";
            return res.status(200).send(result);
        } else {
            return res.status(404).send("User not found" );
        }
    })
    .catch(err => errorHandler(err, req, res));
};

// Checks if email exists
module.exports.checkEmailExists = (req, res) => {
    User.find({ email: req.body.email })
    .then(result => {
        if (result.length > 0) {
            return res.status(409).send(true);
        }

        return res.status(200).send(false);
    })
    .catch(err => errorHandler(err, req, res));
};

// ==========================Code from Discussion with slight modifications for the activity=========================
// const User = require('../models/User');

// const auth = require('../auth');

// const bcrypt = require('bcryptjs');

// const { errorHandler } = require('../auth');

// module.exports.checkEmailExists = (req, res) => {

//     User.find({ email : req.body.email })
//     .then(result => {
//         if (result.length > 0) {
//             return res.send(true);
//         } else {
//             return res.send(false);
//         };
//     })
//     .catch(err => errorHandler(err, req, res));
// };

// // User Registration
// module.exports.registerUser = (req, res) => {
//     let newUser = new User({
//         firstName : req.body.firstName,
//         lastName : req.body.lastName,
//         email : req.body.email,
//         mobileNo : req.body.mobileNo,
//         password : bcrypt.hashSync(req.body.password, 10)
//     })

//     return newUser.save()
//     .then((result) => res.send(result))
//     .catch(err => errorHandler(err, req, res));
// };

// // User Login
// module.exports.loginUser = (req, res) => {
//     User.findOne({ email : req.body.email })
//     .then(result => {
//         if(result == null){
//             return res.send(false);
//         } else {
//             const isPasswordCorrect = bcrypt.compareSync(req.body.password, result.password);

//             if (isPasswordCorrect) {
//                 return res.send({ access : auth.createAccessToken(result)});
//             } else {
//                 return res.send(false);
//             }
//         }
//     })
//     .catch(err => errorHandler(err, req, res));
// }

// module.exports.getProfile = (req, res) => {
//     User.findById(req.user.id)
//     .then(result => {
//         result.password = "";
//         res.send(result);
//     })
//     .catch(err => errorHandler(err, req, res));
// };


