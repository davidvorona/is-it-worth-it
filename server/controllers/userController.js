const User = require('../models/user');
const bcrypt = require('bcrypt');

const userController = {};

userController.getAllUsers = (next) => {
  User.find({}, next);
};

userController.createUser = (req, res, next) => {
  req.body = JSON.parse(Object.keys(req.body)[0]);
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10),
    createdAt: Date.now()
  });

  User.create(user, (err, user) => {
    if (err) res.send(err.message);
    else {
      req.body.id = user._id;
      next();
    }
  });
};

userController.verifyUser = (req, res, next) => {
  req.body = JSON.parse(Object.keys(req.body)[0]);
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) res.send(err);
    else if (!user) res.send('No such user exists.');
    else if (bcrypt.compareSync(req.body.password, user.password)) {
      req.body.id = user._id;
      res.send('Verified.');
      next();
    }
  });
};

module.exports = userController;
