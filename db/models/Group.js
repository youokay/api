const mongoose = require('mongoose');

const userGroup = new mongoose.Schema({
  groupId: String,
  phoneNumbers: [String],
})

const Group = mongoose.model('Group', userGroup);

module.exports = Group;
