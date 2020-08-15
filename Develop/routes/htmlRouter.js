// ==== Dependencies ====
const path = require("path");
const express = require("express");
const fs = require("fs");
const htmlRouter = express.Router();

// ==== HTML Routing ====
// HTML GET Requests

htmlRouter.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

htmlRouter.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// If no matching route is found., default to index.html
htmlRouter.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = htmlRouter;
