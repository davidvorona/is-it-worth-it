const Movie = require('./movie').model;
const test = require('./movie').test;
const mongoose = require('mongoose');

const mongoMethods = {
  clearMovies: () => {
    Movie.remove({}, (err) => {
      if (err) throw err;
      else console.log('Database cleared!');
    });
  },

  saveMovies: (data) => {
    test('Connection test called in mongoMethods.saveMovies...');
    let newMovie;
    data.forEach((element, i) => {
      newMovie = new Movie({
        htmlLink: element.link,
        title: element.title,
        title_id: element.title_id,
        critic: element.critic,
        user: element.user
      });
      if (mongoose.connection === 1) {
        newMovie.save((err) => {
          if (err) return console.error("Error while saving data to MongoDB:", err);
        });
      } else console.log('Database is not connected.');
    });
  },

  getMovie: (req, res, next) => {
    Movie.findOne({ title: req.params.title }, (err, movie) => {
      if (err) throw err;
      else req.movie = movie;
      next();
    });
  }
};

module.exports = mongoMethods;
