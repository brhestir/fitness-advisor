"use strict";
// Exercise.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ExerciseSchema = new Schema(
	{
		type: {
			type: String,
			trim: true,
			required: "String is Required"
		},
		name: {
			type: String,
			trim: true,
			required: "String is required"
		},
		duration: {
			type: Number
		},
		weight: {
			type: Number
		},
		reps: {
			type: Number
		},
		sets: {
			type: Number
		},
	},
);




// Calling mongoose.model() on a schema causes mongoose to COMPILE a model for us
let Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
