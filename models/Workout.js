"use strict";
// Workout.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Exercise = require("./Exercise");
const ExerciseSchema = mongoose.model("Exercise").schema;


// Mongoose - arrays of subdocuments
// The Workout schema contains an array of Exercise schema.
const WorkoutSchema = new Schema({
	day: 				{ type: Date	},
	exercises: 	[{type: ExerciseSchema}], 
});

// Calling mongoose.model() on a schema causes mongoose to COMPILE a model for us
let Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
