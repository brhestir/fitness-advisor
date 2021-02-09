const appRouter = require("express").Router();
const Workouts = require("../models/Workout.js");
const db = require("../models");
const path = require("path");



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
////////////////
// API ROUTES //
////////////////
appRouter.get("/api/workouts", (req, res) => {
	db.Workout.find({}, "day exercises", function(err, workouts) {
		if(err){
			res.status(400).end();
			throw err;
		}
		else{
			res.json(workouts);
		}
	});
});

appRouter.get("/exercise", (req, res) => {
	res.sendFile(path.join(__dirname,"../public/exercise.html"));
});

appRouter.get("/stats", (req, res) => {
	res.sendFile(path.join(__dirname,"../public/stats.html"));
});

appRouter.get("/api/workouts/range", (req,res) => {
	db.Workout.find( {} )
		.sort( { "day": 1 } )
		.limit(7)
		.then( (workouts) => { res.json(workouts); 	})
		.catch( (err) 		=> { res.json(err); 			});
});

appRouter.post("/api/workouts/", (req, res) => {
	db.Workout.create(req.body)
		.then((workoutPost) => {	res.json(workoutPost); 	})
		.catch((err) 				=> {	res.json(err); 					});
});

appRouter.put("/api/workouts/:id", (req, res) => {
	const id = req.params.id;
	const exercisesJSONString = JSON.stringify(req.body);
	const result = JSON.parse(exercisesJSONString);
	console.log(result);
	db.Workout.findByIdAndUpdate(id, { $push: result 	})
		.then((workout) 		=> 	{ res.json(workout);		})
		.catch((err) 				=> 	{	res.json(err);				});
});


module.exports = appRouter;