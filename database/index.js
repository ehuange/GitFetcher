const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id : {type: Number, unique: true},
  name: {type: String, required: true},
  login: {type: String, required: true}, //owner.login
  url: {type: String, required: true}, //owner.html_url
  forks: {type: Number, required: true}, 
  stars: {type: Number, required: true} //just in case forks is not a good sorting method
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (array) => {
  array.forEach(function(repo) {
    Repo.create({id : repo.id,
      name: repo.name,
      login: repo.owner.login,
      url: repo.html_url,
      forks: repo.forks,
      stars: repo.stargazers_count
    }, function(err, anything) {
      if (err) {
        console.log(err);
        return;
      }
    })
  })

}

let find = (callback) => {
  Repo.find().limit(25).sort("-forks").exec(callback);
}


module.exports.save = save;
module.exports.find = find;