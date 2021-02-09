const appRouter = require("express").Router();

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

module.exports = appRouter;