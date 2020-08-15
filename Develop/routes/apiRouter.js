const fs = require("fs");
const path = require("path");
const express = require("express");

let notesData = require("../db/db.json");

const apiRouter = express.Router();

apiRouter.get("/api/notes", function (req, res) {
  res.json(notesData);
});

apiRouter.get("/api/notes/:note", function (req, res) {
  let selectedNote = req.body.params.note;

  for (let i = 0; i < notesData.length; i++) {
    if (selectedNote === notesData[i].id) {
      return res.json(notesData[i]);
    }
  }

  return res.json(false);
});

// API POST Requests
apiRouter.post("/api/notes", function (req, res) {
  fs.readFile("./Develop/db/db.json", "utf-8", function read(err, data) {
    console.log("There was an error：", err, data);
    let newDb = JSON.parse(data);

    let newNote = {
      id: newDb.length + 1,
      title: req.body.title,
      text: req.body.text,
    };

    newDb.push(newNote);

    //Reassigns notesData to return updated
    notesData = newDb;
    res.send(newNote);

    fs.writeFile("./Develop/db/db.json", JSON.stringify(newDb), function (err) {
      if (err) {
        return console.log(`Something went wrong: ${err}`);
      }
    });
  });
});

apiRouter.delete("/api/notes/:id", function (req, res) {
  let idToDelete = req.params.id;

  //Declares an empty notes array
  let newDb = [];

  for (let i = 0; i < notesData.length; i++) {
    if (idToDelete != notesData[i].id) {
      //Adds notes with non-matching ids to the data array
      newDb.push(notesData[i]);
    }
  }

  notesData = newDb;

  //Overwrites and updates the db.json file
  fs.writeFileSync(path.join("./Develop/db/db.json"), JSON.stringify(newDb));

  return res.json(false);
});

module.exports = apiRouter;
