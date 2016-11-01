const mongoose = require('mongoose');
const Movie = require('./movie')

const mongoMethods = {
  clearMovies: () => {
    Movie.remove({}, (err) => {
      if (err) throw err;
    });
  },

  saveMovies: (data) => {
    let movie;
    data.forEach((element) => {
      movie = new Movie({
        htmlLink: element.link,
        title: element.title,
        critic: element.critic,
        user: element.user
      });
      movie.save((err) => {
        if (err) throw err;
        else console.log('Posted to database!')
      });
    });
  },

  getMovie: (req, res, next) => {
    Movie.findOne({ title: req.params.title }, (err, movie) => {
      if (err) throw err;
      else req.movie = movie;
      next();
    });
  }
}

module.exports = mongoMethods;
