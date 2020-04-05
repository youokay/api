// const db = require('../db/index');

module.exports = {
  checkIn (req, res, next) {
    console.log('checked in');
    res.send('<h2>Thanks for checking in!</h2>');
  }
}
