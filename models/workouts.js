const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [{
        type: {
            type: String,
            trim: true,
        },
        name: {
            type: String,
            trim: true,
        },
        duration: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        distance: {
            type: Number,
        },
    }],
    date: {
        type: Date,
        default: Date.now
    },
    totalDuration: {
        type: Number,
    }
});

const Workout = mongoose.model("Workouts", workoutSchema);

module.exports = Workout;