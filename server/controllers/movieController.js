const Movie = require('../models/movie');
const mongoose = require('mongoose');

const movieController = {};

movieController.clearMovies = (req, res, next) => {
  Movie.remove({}, (err) => {
    if (err) throw err;
    else console.log('Database cleared!');
    next();
  });
};

movieController.saveMovies = (req, res) => {
  let newMovie;
  if (mongoose.connection.readyState === 1) {
    req.movies.forEach((element) => {
      newMovie = new Movie({
        htmlLink: element.link,
        title: element.title,
        title_id: element.title_id,
        critic: element.critic,
        user: element.user
      });
      newMovie.save((err) => {
        if (err) return console.error('Error while saving data to database:', err);
      });
    });
    console.log('Migration complete.');
  } else console.log('Database is not connected.');
};

movieController.getMovie = (req, res, next) => {
  Movie.findOne({ title_id: req.params.title }, (err, movie) => {
    if (err) throw err;
    else req.movie = movie;
    next();
  });
};

module.exports = movieController;
