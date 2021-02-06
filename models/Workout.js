const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  // type: "resistance",
  // name: "Quad Press",
  // duration: 30,
  // weight: 300,
  // reps: 10,
  // sets: 4
  type: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  name: {
    type: String,
    trim: true,
    required: "String is required",
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
  sets: {
    type: Number,
  },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
