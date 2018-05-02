const getRepos = require("../helpers/github");

const { save, find } = require("../database/index.js");
const express = require("express");
const bodyParser = require("body-parser");
const $ = require("jquery");
const morgan = require("morgan");
const app = express();

app.use(express.static(__dirname + "/../angular-client"));
app.use(express.static(__dirname + "/../node_modules/angular"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan("dev"));

app.post("/repos", function(req, res) {
  const input = req.body.query;
  getRepos.getReposByUsername(input, function(error, result) {
    if (error) {
      console.log(error);
      return;
    } else {
      const data = JSON.parse(result.body);
      save(data, function(error, results) {
        if (error) {
          console.log(error);
        }
      });
    }
  });
  res.send("posted");
});

app.get("/repos", function(req, res) {
  find(function(err, data) {
    res.send(data);
  });
});

const port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
