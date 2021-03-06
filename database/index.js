const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/fetcher");

const repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: { type: Number, unique: true },
  name: { type: String, required: true },
  login: { type: String, required: true }, //owner.login
  url: { type: String, required: true }, //owner.html_url
  forks: { type: Number, required: true },
  stars: { type: Number, required: true } //just in case forks is not a good sorting method
});

const Repo = mongoose.model("Repo", repoSchema);

const save = (array, callback) => {
  let data = array.map(function(item) {
    return {
      id: item.id,
      name: item.name,
      login: item.owner.login,
      url: item.html_url,
      forks: item.forks,
      stars: item.stargazers_count
    };
  });
  Repo.insertMany(data, function(error, result) {
    if (error) {
      callback(error, null);
    }
    callback(null, result);
  });
};

const find = callback => {
  Repo.find()
    .limit(25)
    .sort("-forks")
    .exec(callback);
};

module.exports.save = save;
module.exports.find = find;
