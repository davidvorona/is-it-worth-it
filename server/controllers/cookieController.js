const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  res.cookie('secret', Math.floor((Math.random() * 100)));
  next();
};

cookieController.setSSIDCookie = (req, res, next) => {
  res.cookie('SSID', req.body.id, { httpOnly: true });
  next();
};

module.exports = cookieController;
