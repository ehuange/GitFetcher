const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: {String, required: true},
  login: {String, required: true}, //owner.login
  url: {String, required: true}, //owner.html_url
  forks: {Number, required: true},
  stars: {Number, required: true} //just in case forks is not a good sorting method
});

let Repo = mongoose.model('Repo', repoSchema);

let save = () => {
  Repo.save((err) => {
    if (err) {
      return handleError(err);
    }
    console.log('saved!');
  }
  //should be saved otherwise
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;