const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/mongodb-movie');
mongoose.connection.once('open', () => {
  console.log('Connected with MongoDB - Movies');
});

// place Schemas here
const MovieSchema = new Schema({
  htmlLink: String,
  title: String,
  critic: Object,
  user: Object
});

// TODO: transition for movies
module.exports = function (data) {
  const Movie = mongoose.model('Movie', MovieSchema);
  Movie.remove({}, (err) => {
    if (err) throw err;
    console.log('Collection reset!');
  });
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
};

// 'npm run db mongodb-movie' to run file and save scraped values to database
// 'mongo mongodb-movie' to start mongo CLI and verify dbs
