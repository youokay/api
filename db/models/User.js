const mongoose = require('mongoose');
const Group = require('./Group').schema;

const userSchema = new mongoose.Schema({
  phone: String,
  lastCheckIn: { type: Date, default: Date.now },
  groups: { type: Array, default: Group }
})

const User = mongoose.model('User', userSchema);

module.exports = User;
