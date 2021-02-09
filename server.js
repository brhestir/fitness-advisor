// server.js
const mongoose = require("mongoose");					// Mongoose-ODM for MongoDB
const express = require("express");						// Express.js
const morgan = require("morgan"); 						// Express.js logging middleware

const app = express();												// Express.js instantiation
app.use(morgan( {
	format: "dev",
	skip: function(req, res) {
		// if res.statusCode === 304
		// i.e. "Not Modified" then skip() returns true
		return res.statusCode === 304;
	}
}));
app.use(express.urlencoded({ extended: true }));	// URL param parsing middleware?
app.use(express.json());													// JSON parsing middleware?
app.use(express.static("public"));								// serve static files from "/"
app.use(express.static("routes", "/api.js"));							// server-side API routes




mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

const db = mongoose.connection;

db.on("error", 			(err) => { console.log(`Mongoose connection error: ${err}`); });
db.on("connected", 	() 		=> {
	console.log("Mongoose successfully connected");
	
	
	
	
	app.listen(PORT, () => {
		console.log(`App running on port ${PORT}`);
	});
	

	

});



