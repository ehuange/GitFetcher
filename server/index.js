const getRepos = require('../helpers/github');

const {save, find} = require('../database/index.js')
const express = require('express');
const bodyParser = require('body-parser')
const $ = require('jquery');
const morgan = require('morgan');
let app = express();

// UNCOMMENT FOR ANGULARJS
app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules/angular'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(morgan('dev'));
// UNCOMMENT FOR REACT
// app.use(express.static(__dirname + '/../react-client/dist'));


app.post('/repos', function (req, res) {
  var input = req.body.query;
  getRepos.getReposByUsername(input, function(error, res) {
    if (error) {
      console.log(error);
      return;
    }
    else {
      var data = JSON.parse(res.body);
      save(data);
    }
  })
  
  
  
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  res.send('posted');
});

app.get('/repos', function (req, res) {
  find(function(err, data) {
    res.send(data);
  });
  // TODO - your code here!
  // This route should send back the top 25 repos
  
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
