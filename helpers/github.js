const request = require('request');
const config = require('../config.js');

const getReposByUsername = (user, callback) => {
  const options = {
    url: `https://api.github.com/users/${user}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  
  request(options, callback);
  
}

module.exports.getReposByUsername = getReposByUsername;
