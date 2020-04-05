const mongoose = require('mongoose');
const Groups = require('./Groups.js').schema;

const userSchema = new mongoose.Schema({
  phone: String,
  lastCheckIn: Date,
  groups: [Groups]
})

const User = mongoose.model('User', userSchema);

module.exports = User;
