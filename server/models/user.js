const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

// place Schemas here
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  username: { type: String, required: true, unique: true },
  password: String,
  dateCreated: Date
});

const User = mongoose.model('User', userSchema);

module.exports = User;

// 'mongo reel-users' to start mongo CLI and verify dbs
