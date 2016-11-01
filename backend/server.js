const express = require('express');
const app = express();
const timeout = require('connect-timeout');
const bodyParser = require('body-parser');
const scraperController = require('./scraper');
const mongoMethods = require('./mongoMethods');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongodb-movie');
mongoose.connection.once('open', () => {
  console.log('Connected with MongoDB - Movies');
});

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
