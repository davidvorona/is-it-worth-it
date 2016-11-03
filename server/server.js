const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const movieController = require('./controllers/movieController');
const scraperController = require('./controllers/scraper');
const userController = require('./controllers/userController');
const cookieController = require('./controllers/cookieController');
const sessionController = require('./controllers/sessionController');

const app = express();

const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost/reel-movies';
mongoose.connect(mongoURI);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  req.setTimeout(0);
  res.setTimeout(0);
  next();
});

app.get('/scrape', scraperController.getLinks, scraperController.getData, movieController.clearMovies, movieController.saveMovies);

app.get('/movie/:title', movieController.getMovie, (req, res) => {
  res.json(req.movie);
});

app.post('/join', userController.createUser, cookieController.setSSIDCookie, sessionController.startSession, (req, res) => {
  res.send('Account created!');
});

app.post('/login', userController.verifyUser, cookieController.setSSIDCookie, sessionController.startSession, (req, res) => {
  res.send('Signed in!');
});

app.listen(process.env.PORT || 3000);

module.exports = app;
