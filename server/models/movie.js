const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// place Schemas here
// TODO: scrape for last three parameters
const movieSchema = new Schema({
  htmlLink: String,
  title: String,
  title_id: String,
  critic: String,
  user: String,
  genres: Object,
  actors: Object,
  directors: Object
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

// 'mongo reel-movies' to start mongo CLI and verify dbs
