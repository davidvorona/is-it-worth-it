// SCRAPE N SAVE, BABY
// 'npm run db reel-movies' to run `save.js` file and save scraped values to database
const request = require('request');

const API_URL = 'http://localhost:3000/scrape';

request(API_URL, (err, res, body) => JSON.parse(body));
