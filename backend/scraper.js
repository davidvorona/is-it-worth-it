'use strict';

const cheerio = require('cheerio');
const request = require('request');

const scrapeController = {
  getData: (req, res, next) => {
    const domain = 'http://www.metacritic.com/movie/' + searchQuery;
    // change URL to any site that you want
    request(domain, (error, response, html) => {
      let $ = cheerio.load(html);
      if(error) return console.log(error);
      var scores = [];
      $('.metascore_w xlarge movie positive').each(function(results, element) {
        scores.push($(this).attr('ratingValue'));
      });
      console.log(scores);
      res.send(scores);
    });
  }
};

module.exports = scrapeController;
