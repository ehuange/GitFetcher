import { getReposByUsername } from '../helpers/github';

const getRepos = require('../helpers/github');


const express = require('express');
const bodyParser = require('body-parser')
const $ = require('jquery');

let app = express();

// UNCOMMENT FOR ANGULARJS
app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules/angular'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// UNCOMMENT FOR REACT
// app.use(express.static(__dirname + '/../react-client/dist'));


app.post('/repos', function (req, res) {
  var input = req.body.query;
  getReposByUsername(input);
  
  
  
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  res.send('posted');
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
