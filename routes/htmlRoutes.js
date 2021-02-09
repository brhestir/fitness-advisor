const router = require("express").Router();

router.get("/", (req, res) => {
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

router.get("/", (req, res) => {
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


// router.get("/", (req, res) => { sendFileHandler(req, res); } );



// function sendFileHandler(response) { 
// 	res.sendFile("/index.html", (err, respon) => {
// 		if (err) {
// 			res.status(400).json(err);
// 			throw err;
// 		}	else { 
// 			res.end();
// 		}
// 	});
// });

module.exports = htmlRouter;