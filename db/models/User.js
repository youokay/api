const mongoose = require('mongoose');
const Groups = require('./Groups.js').schema;

const userSchema = new mongoose.Schema({
  phone: Number,
  lastCheckIn: Date,
  groupId: [Groups]
})

const User = mongoose.model('User', userSchema);

module.exports = User;
