const request = require('request');
const test = require('./movie').test;

const API_URL = 'http://localhost:3000/scrape';
const migrate = require('./mongoMethods').saveMovies;
const clear = require('./mongoMethods').clearMovies;

request(API_URL, (err, res, body) => {
  const data = JSON.parse(body);
  test('Connection test called in save.js...');
  clear();
  migrate(data);
});

// 'npm run db reel-movies' to run `save.js` file and save scraped values to database
