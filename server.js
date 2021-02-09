// server.js
const mongoose = require("mongoose");					// Mongoose-ODM for MongoDB
const express = require("express");						// Express.js
const morgan = require("morgan"); 						// Express.js logging middleware

const PORT = process.env.PORT || 3000;				// Express.js port
const app = express();												// Express.js instantiation

// var router = express.Router();
const appRouter = require("./routes/router.js");

app.use(morgan("dev", {
	skip: function(req, res) {
		// if res.statusCode === 304
		// i.e. "Not Modified" then skip() returns true
		return res.statusCode === 304;
	}
}));

app.use(express.urlencoded({ extended: true }));	// URL param parsing middleware?
app.use(express.json());													// JSON parsing middleware?
app.use(express.static(__dirname + "/public"));								// serve static files from "/"
app.use("/", appRouter);							// Add routes to express

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

const db = mongoose.connection;

db.on("error", 			(err) => { console.log(`Mongoose connection error: ${err}`) });
db.on("connected", function(){
	console.log("Mongoose successfully connected");
	app.listen(PORT, () => {
		console.log(`App running on port ${PORT}`);
	});
});

