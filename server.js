// server.js
// const express = require("express");
// const logger = require("morgan");
const mongoose = require("mongoose");
// const { response } = require("express");

// const PORT = process.env.PORT || 3000;

// Require models

// create express instance
// const app = express();

// app.use(logger("dev"));
// app.use(express.json());

// app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected");
});

connection.on("error", (err) => {
  console.log(`Mongoose connection error: ${err}`);
});

// app.post("/arbitraryRoute", ({body}, res) => {
//     ModelName.create(body)
//     .then(dbModelName => {
//         res.json(dbModelName);
//     })
//     .catch(err => {
//         res.json(err);
//     });
// });

// app.listen(PORT, () => {
//     console.log(`App running on port ${PORT}`);
// });
