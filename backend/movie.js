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

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

// 'mongo reel-movies' to start mongo CLI and verify dbs
