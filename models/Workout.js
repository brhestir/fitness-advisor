"use strict";
// Workout.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Exercise = require("./Exercise");
const ExerciseSchema = mongoose.model("Exercise").schema;

// Mongoose - arrays of subdocuments
// The Workout schema contains an array of Exercise schema.
const WorkoutSchema = new Schema(
	{
		day: {
			type: Date,
			default: Date.now
		},
		exercises: 	[{type: ExerciseSchema}]
	},
	{
		toJSON: {
			virtuals: true
		},
	},
);

const initialValue = 0;
let accTimeCallback = ( acc, cV ) => acc + cV.duration;
WorkoutSchema.virtual("totalDuration").get( function() {
	return this.exercises.reduce(accTimeCallback, initialValue);
});

let accDistCallback = ( acc, cV ) => acc + cV.duration;
WorkoutSchema.virtual("totalDistance").get( function() {
	return this.exercises.reduce(accDistCallback, initialValue);
});

// Calling mongoose.model() on a schema causes mongoose to COMPILE a model for us
let Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
