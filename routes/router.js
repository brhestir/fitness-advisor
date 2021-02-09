const appRouter = require("express").Router();
const Workouts = require("../models/Workout.js");
const db = require("../models");



appRouter.get("/", (req, res) => {
	res.sendFile("/index.html", (err) => {
		if(err) {
			console.log(`[E] / err: ${err}`);
			res.status(400).json(err);
			throw err;
		} else {
			res.end();
		}
	});
});

appRouter.get("/", (req, res) => {
	res.sendFile("/index.html", (err) => {
		if(err) {
			console.log(`[E] / err: ${err}`);
			res.status(400).json(err);
			throw err;
		} else {
			res.end();
		}
	});
});

// ********** NOT WORKING CORRECTLY
appRouter.get("/exercise", (req, res) => {
	res.sendFile("/exercise.html", (err) => {
		if(err) {
			console.log(`[E] / err: ${err}`);
			res.status(400).json(err);
			throw err;
		} else {
			res.end();
		}
	});
});


// POST
appRouter.post("/api/workouts", (req, res) => {
	console.log(`[i] /api/workouts ${req.body}`);
	res.sendFile("/exercise.html", (err) => {
		if(err) {
			console.log(`[E] /api/workouts err: ${err}`);
			res.status(400).json({result: "Server error"});
			throw err;
		}	else {
			res.end();
		}
	});
});


////////////////
// API ROUTES //
////////////////
appRouter.get("/api/workouts", (req, res) => {
	db.Workout.find({}, "day exercises", function(err, workouts) {
		if(err){
			throw err;
		}
		else{
			res.json(workouts);
		}
	});
});

module.exports = appRouter;