const mongoose = require('mongoose');
const Group = require('./Group').schema;

const userSchema = new mongoose.Schema({
  phone: String,
  lastCheckIn: Date,
  groups: [Group]
})

const User = mongoose.model('User', userSchema);

module.exports = User;
