var mongoose = require('mongoose');
//TODO add db
const mongoUri = 'mongodb://localhost/';

mongoose.connect(mongoUri, { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to DB!')
});

module.exports = db;