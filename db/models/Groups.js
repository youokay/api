const mongoose = require('mongoose');

const userGroups = new mongoose.Schema({
  groupId: String,
  phoneNumbers: [String],
})

const Groups = mongoose.model('Groups', userGroups);

module.exports = Groups;
