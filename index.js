// Dependencies
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// Setting Up App
const app = express();

// Middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use("/v1/api", require("./routes/api"));

//Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening at", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
