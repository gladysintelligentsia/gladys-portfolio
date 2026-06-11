
const express = require('express');
const enrollmentController = require('../controllers/enrollment');
const auth = require("../auth");

const {verify} = auth;

const router = express.Router();

// Route to enroll user to course
router.post('/enroll', verify, enrollmentController.enroll);

const express = require(`express`);
const router = express.Router();
const enrollmentController = require('../controllers/enrollment');

const { verify, verifyAdmin } = require('../auth');

router.post("/enroll", verify, enrollmentController.enroll);


module.exports = router;