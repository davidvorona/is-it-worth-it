'use strict';

const express = require('express');
const app = express();
const scraperController = require('./scraper');

app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

app.get('/scrape', scraperController.getData);


app.listen(process.env.PORT || 3000);

module.exports = app;
