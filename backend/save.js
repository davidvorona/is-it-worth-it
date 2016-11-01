// this runs scraper, then pushes data to movie.js

const request = require('request');
const mongoose = require('mongoose');

const API_URL = 'http://localhost:3000/scrape';
const migrate = require('./mongoMethods').saveMovies;
const clear = require('./mongoMethods').clearMovies;
const dbname = 'mongodb-movie';

request(API_URL, (err, res) => {
  const data = JSON.parse(res.body);
  clear();
  migrate(data);
});

// 'npm run db mongodb-movie' to run `save.js` file and save scraped values to database
