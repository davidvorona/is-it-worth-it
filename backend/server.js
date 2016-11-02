const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost/reel-movies';
mongoose.connect(mongoURI);
const mongoMethods = require('./mongoMethods');

const scraperController = require('./scraper');

app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  req.setTimeout(0);
  res.setTimeout(0);
  next();
});

app.get('/scrape', scraperController.getLinks, scraperController.getData, mongoMethods.clearMovies, mongoMethods.saveMovies);

app.get('/movie/:title', mongoMethods.getMovie, (req, res) => {
  res.json(req.movie);
});

app.listen(process.env.PORT || 3000);

module.exports = app;
