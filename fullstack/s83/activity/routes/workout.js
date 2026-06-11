const express = require("express");
const router = express.Router();
const Workout = require("../models/Workout");
const auth = require("../auth"); // Assuming you have an auth middleware

// Add a workout
router.post("/addWorkout", auth.verify, async (req, res) => {
    try {
        const { id } = auth.decode(req.headers.authorization); // Get userId from token
        const newWorkout = new Workout({
            name: req.body.name,
            duration: req.body.duration,
            userId: id,
            status: "Pending"
        });
        const savedWorkout = await newWorkout.save();
        res.status(201).send(savedWorkout);
    } catch (error) {
        res.status(500).send({ error: "Failed to add workout" });
    }
});

// Retrieve my workouts
router.get("/getMyWorkouts", auth.verify, async (req, res) => {
    const { id } = auth.decode(req.headers.authorization);
    const workouts = await Workout.find({ userId: id });
    res.status(200).send({ workouts });
});

// Update a workout
router.patch("/updateWorkout/:workoutId", auth.verify, async (req, res) => {
    const { id } = auth.decode(req.headers.authorization);
    
    const updatedWorkout = {
        name: req.body.name,
        duration: req.body.duration
    };

    const result = await Workout.findOneAndUpdate(
        { _id: req.params.workoutId, userId: id }, 
        updatedWorkout, 
        { new: true }
    );

    result ? res.send(result) : res.status(404).send({ message: "Workout not found" });
});

// Delete a workout
router.delete("/deleteWorkout/:workoutId", auth.verify, async (req, res) => {
    const { id } = auth.decode(req.headers.authorization);
    
    const result = await Workout.findOneAndDelete({ _id: req.params.workoutId, userId: id });
    
    result ? res.send({ message: "Workout deleted successfully" }) : res.status(404).send({ message: "Workout not found" });
});

// Update workout status to completed
router.patch("/completeWorkoutStatus/:workoutId", auth.verify, async (req, res) => {
    const { id } = auth.decode(req.headers.authorization);
    
    const result = await Workout.findOneAndUpdate(
        { _id: req.params.workoutId, userId: id },
        { status: "Completed" },
        { new: true }
    );
    
    result ? res.send({ updatedWorkout: result }) : res.status(404).send({ message: "Workout not found" });
});

module.exports = router;