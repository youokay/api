var mongoose = require('mongoose');
const config = require('../env.config.js');

console.log('config.DATABASE_URL: ', config.DATABASE_URL);

const mongoUri = `${config.DATABASE_URL}:/${config.DATABASE_NAME}`;

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to DB!')
});

const userGroup = new mongoose.Schema({
  groupId: Number,
  phoneNumbers: [String],
})

const Group = mongoose.model('Group', userGroup);

const userSchema = new mongoose.Schema({
  phone: String,
  lastCheckIn: { type: Date, default: Date.now },
  groups: { type: Array, default: Group }
})

const User = mongoose.model('User', userSchema);

module.exports = { db, User };