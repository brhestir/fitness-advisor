const router = require("express").Router();



router.post("./api/workouts", (req, res) => {
	
	console.log(`[i] /api/workouts ${req.body}`);

	res.sendFile("./exercise.html", (err) => {
		if(err) {
			console.log(`[E] /api/workouts err: ${err}`);
			res.status(400).json({result: "Server error"});
			throw err;
		}	else {
			res.end();
		}

	});

});

module.exports = apiRouter;