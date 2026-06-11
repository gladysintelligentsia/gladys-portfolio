const Course = require(`../models/Course`);
const {errorHandler} = require('../auth');

// Get all course
module.exports.getAllCourses = (req, res) => {
    return Course.find()
    .then(result => res.send(result))
    .catch(err => errorHandler(err, req, res));
};

// Create new course
module.exports.addCourse = (req, res) => {
    let newCourse = new Course({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });

    return newCourse.save()
        .then(result => res.send(result))
        .catch(err => errorHandler(err, req, res));
};

// Get all active courses
module.exports.getAllActive = (req, res) => {
    return Course.find({ isActive: true })
    .then(courses => {
        res.status(200).send(courses);
    })
    .catch(err => errorHandler(err, req, res));
};

// Get specific course
module.exports.getCourse = (req, res) => {
    return Course.findById(req.body.id)
        .then(result => res.send(result))
        .catch(err => errorHandler(err, req, res));
};

// Update Course
module.exports.updateCourse = (req, res) => {

    let updatedCourse = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    };

    return Course.findByIdAndUpdate(
        req.params.courseId,
        updatedCourse
    )
    .then(course => {
        if (course) {
            return res.send(true);
        } else {
            return res.send(false);
        }
    })
    .catch(err => errorHandler(err, req, res));
};

// Archive course by setting isActive: false
// controllers/course.js

module.exports.archiveCourse = (req, res) => {

 
    return Course.findById(req.params.courseId)
    .then(course => {
        if (!course) {
 
            return res.status(404).send(false);
        }

 
        if (course.isActive === false) {
 
            return res.status(200).send("Course already archived");
        }

 
        course.isActive = false;

        return course.save().then(updatedCourse => {
 
            return res.status(200).send(true);
        });
    })
    .catch(err => {
        console.error(err);
        return res.status(500).send("Error in archiving course");
    });
};

// Activate course by setting isActive: true
module.exports.activateCourse = (req, res) => {
    let updateActiveField = { isActive: true };

    return Course.findByIdAndUpdate(req.params.courseId,  updateActiveField)
        .then(activateCourse => {
            if (activateCourse) {
                // Success: 200 OK
                res.status(200).send(true);
            } else {
                // Not Found: 404
                res.status(404).send(false);
            }
        })
        .catch(err => {
            // Server Error: 500
            res.status(500).send(err);
        });
};
  
// ==========================Code from Discussion with slight modifications for the activity=========================

// const Course = require("../models/Course");
// const { errorHandler } = require('../auth');

// module.exports.addCourse = (req,res) => {
//     let newCourse = new Course({
//         name : req.body.name,
//         description : req.body.description,
//         price : req.body.price
//     });

//     newCourse.save().then(result => res.send(result))
//     .catch(err => errorHandler(err, req, res));
// };

// module.exports.getAllCourses = (req, res) => {
//     Course.find({})
//     .then(result => res.send(result))
//     .catch(err => errorHandler(err, req, res));
// };

// module.exports.getAllActive = (req, res) => {
//     Course.find({ isActive: true })
//     .then(result => res.send(result))
//     .catch(err => errorHandler(err, req, res));
// };

// module.exports.getCourse = (req, res) => {
//     Course.findById(req.body.id)
//     .then(result => res.send(result))
//     .catch(err => errorHandler(err, req, res));
// };

// // Update Course
// module.exports.updateCourse = (req, res) => {
//     let updatedCourse = {
//         name: req.body.name,
//         description: req.body.description,
//         price: req.body.price
//     };

//     Course.findByIdAndUpdate(
//         req.params.courseId,
//         updatedCourse
//     )
//     .then(course => {
//         if (course) {
//             return res.send(true);
//         } else {
//             return res.send(false);
//         }
//     })
//     .catch(err => errorHandler(err, req, res));
// };

// // Archive course by setting isActive: false
// module.exports.archiveCourse = (req, res) => {
//     let updateActiveField = {
//         isActive: false
//     };

//     return Course.findByIdAndUpdate(req.params.courseId, updateActiveField)
//         .then(archiveSuccess => {
//             if (archiveSuccess) {
//                 res.status(200).send(true);
//             } else {
//                 res.status(404).send(false);
//             }
//         })
//         .catch(err => errorHandler(err, req, res));
// };

// // Get specific course
// module.exports.getCourse = (req, res) => {
//     return Course.findById(req.body.id)
//         .then(result => res.send(result))
//         .catch(err => errorHandler(err, req, res));
// };

// // Activate course by setting isActive: true
// module.exports.activateCourse = (req, res) => {
//     return Course.findByIdAndUpdate(
//         req.params.courseId,
//         { isActive: true },
//         { new: true }
//     )
//     .then(result => {
//         if (result) {
//             return res.send(true);
//         }

//         return res.send(false);
//     })
//     .catch(err => errorHandler(err, req, res));
// };
