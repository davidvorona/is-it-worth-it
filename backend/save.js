// this posts to database

const request = require('request');

const API_URL = 'http://localhost:3000/scrape';

const migrate = require('./movie.js');
const dbname = 'mongodb-movie';

request(API_URL, (err, resp) => {
  let data = JSON.parse(resp.body);
  migrate(data);
});
