const express = require('express');
const app = express();
const timeout = require('connect-timeout');
const scraperController = require('./scraper');

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  req.setTimeout(0);
  res.setTimeout(0);
  next();
});

app.get('/scrape', scraperController.getLinks, scraperController.getData);

app.listen(process.env.PORT || 3000);

module.exports = app;
