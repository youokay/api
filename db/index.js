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

module.exports = db;