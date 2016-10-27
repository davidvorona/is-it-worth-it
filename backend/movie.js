const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/mongodb-movie');
mongoose.connection.once('open', () => {
  console.log('Connected with MongoDB - Movies');
});

// place Schemas here
const MovieSchema = new Schema({
  htmlLink: String
});

// TODO: transition for movies
module.exports = function(data) {
  const Movie = mongoose.model('Movie', MovieSchema);
  let movie;
  const links = Object.keys(data).map(function (key) {
    return data[key];
  });
  links.forEach(function(element, i, array) {
    movie = new Movie({
      htmlLink: element
      // created: new Date(data[dates][i].created),
    });
    movie.save();
  });
};

// 'npm run db mongodb-movie' to run file and save scraped values to database
// 'mongo mongodb-movie' to start mongo CLI and verify dbs
