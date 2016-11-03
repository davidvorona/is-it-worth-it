const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

// place Schemas here
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  preferences: Object,
  dateCreated: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

// 'mongo reel-users' to start mongo CLI and verify dbs
