const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// place Schemas here
const movieSchema = new Schema({
  htmlLink: String,
  title: String,
  title_id: String,
  critic: String,
  user: String
});

const Movie = {
  model: mongoose.model('Movie', movieSchema),
  test: string => console.log(string, mongoose.connection.readyState)
};

module.exports = Movie;

// 'mongo reel-movies' to start mongo CLI and verify dbs
