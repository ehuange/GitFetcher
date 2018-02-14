const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: String,
  owner: String, //owner.login
  url: String, //owner.html_url
  forks: Number,
  stars: Number //just in case forks is not a good sorting method
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (err) => {
  if (err) {
    console.log(err);
    return;
  }
  //should be saved otherwise
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;