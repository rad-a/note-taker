// ==== Dependencies ====
const express = require("express");
const path = require("path");
const fs = require("fs");

// Setting up an express server
const app = express();
const PORT = process.env.PORT || 8080;

const htmlRouter = require("./Develop/routes/htmlRouter");
const apiRouter = require("./Develop/routes/apiRouter");

// ==== Middleware ====
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join("./Develop/public")));

// ==== Routes ====
app.use("/", apiRouter);
app.use("/", htmlRouter);

// ==== Listener ====
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
