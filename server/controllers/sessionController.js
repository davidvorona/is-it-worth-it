const Session = require('../models/session');

const sessionController = {};

sessionController.isLoggedIn = (req, res, next) => {
  Session.findOne({ cookieId: req.cookies.SSID }, (err, session) => {
    if (err) console.error(err);
    else if (!session) {
      res.redirect('http://localhost:8080');
    } else next();
  });
};

sessionController.startSession = (req, res, next) => {
  const session = new Session({
    cookieId: req.body.id
  });
  Session.create(session);
  next();
};

module.exports = sessionController;
