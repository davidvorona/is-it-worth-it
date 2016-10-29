// this runs scraper, then pushes data to movie.js

const request = require('request');

const API_URL = 'http://localhost:3000/scrape';
const migrate = require('./movie.js');
const dbname = 'mongodb-movie';

request(API_URL, (err, resp) => {
  const data = JSON.parse(resp.body);
  migrate(data);
});
