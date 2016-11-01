const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// place Schemas here
const MovieSchema = new Schema({
  htmlLink: String,
  title: String,
  critic: Object,
  user: Object
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;

// 'mongo mongodb-movie' to start mongo CLI and verify dbs
