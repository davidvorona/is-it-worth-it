const Movie = require('./movie');
const mongoose = require('mongoose');

const mongoMethods = {
  clearMovies: (req, res, next) => {
    Movie.remove({}, (err) => {
      if (err) throw err;
      else console.log('Database cleared!');
      next();
    });
  },

  saveMovies: (req, res) => {
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
