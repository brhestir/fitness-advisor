// Workout.js

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Mongoose - arrays of subdocuments
// The Workout schema contains an array of Exercise schema.
const WorkoutSchema = new Schema({
  day: { type: Date },
  exercises: [ExerciseSchema],
});

// Calling mongoose.model() on a schema causes mongoose to COMPILE a model for us
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
