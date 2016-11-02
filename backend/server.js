const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost/reel-movies';
const db = mongoose.connect(mongoURI);
const mongoMethods = require('./mongoMethods'); // ERR: running this and movie.js files before connection opens

const scraperController = require('./scraper');

app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  req.setTimeout(0);
  res.setTimeout(0);
  next();
});

app.get('/scrape', scraperController.getLinks, scraperController.getData);

app.get('/movie/:title', mongoMethods.getMovie, (req, res) => {
  res.json(req.movie);
});

app.listen(process.env.PORT || 3000);

module.exports = app;
