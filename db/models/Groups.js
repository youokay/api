const mongoose = require('mongoose');

const userGroups = new mongoose.Schema({
  groupId: Number,
  phoneNumbers: [Number], // String?
})

const Groups = mongoose.model('Groups', userGroups);

module.exports = Groups;
