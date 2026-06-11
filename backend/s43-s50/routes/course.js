/*S44 ACTIVITY SOLUTION START*/
const express = require("express");
const courseController = require("../controllers/course");

const { verify, verifyAdmin } = require("../auth");

const router = express.Router();

// Route for adding new course
router.post("/", verify, verifyAdmin, courseController.addCourse);

// Route for getting all courses
router.get("/all", verify, verifyAdmin, courseController.getAllCourses);

// Route for getting all active courses
router.get("/", courseController.getAllActive);

// Route for getting a specific course
router.get("/specific/:id", courseController.getCourse);

// Rotue for updating a specific course
router.patch("/:courseId", verify, verifyAdmin, courseController.updateCourse);

// Route for archiving a course
router.patch("/:courseId/archive", verify, verifyAdmin, courseController.archiveCourse);

// Route for activating a course
router.patch("/:courseId/activate", verify, verifyAdmin, courseController.activateCourse);

module.exports = router;
