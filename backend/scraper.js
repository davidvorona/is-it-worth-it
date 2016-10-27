const cheerio = require('cheerio');
const request = require('request');

function generateURLs(link) {
  const url = 'http://www.metacritic.com';
  return url + link;
}

const scraperController = {
  getData: (req, res, next) => {
    const options = {
      url: 'http://www.metacritic.com/browse/movies/release-date/theaters/date',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36'
      }
    };
    // change URL to any site that you want
    request(options, (error, response, html) => {
      const $ = cheerio.load(html);
      if (error) throw error;
      const links = {};
      let title;
      let link;
      $('.product_title a').each(function() {
        link = $(this).attr('href');
        title = link.slice(7);
        links[title.toString()] = generateURLs(link);
      });
      res.send(links);
      return;
    });
    // // change URL to any site that you want
    // request(options, (error, response, html) => {
    //   let $ = cheerio.load(html);
    //   if(error) return console.log(error);
    //   let scores = {};
    //   let count = 0;
    //   $('.metascore_anchor').each(function() {
    //     count++;
    //     if (count === 1) scores.critic = $(this).text();
    //     else if (count === 2) scores.user = $(this).text();
    //     else return;
    //   })
    //   res.send(scores);
    // });
  }
};

module.exports = scraperController;
