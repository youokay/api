const db = require('../db/index');
const User = require('../db/models/User');
const Group = require('../db/models/Group');

// curl -d "@data.json" -H "Content-Type: application/json" -X POST http://localhost:3000/data

module.exports = {
  checkIn (req, res, next) {
    console.log('checked in');
    res.send('<h2>Thanks for checking in!</h2>');
  },
  seedUser (req, res, next) {
    const data = new User(req.body);
    data.save()
      .then(result => {
        res.status(201).send(result);
      })
      .catch(err => {
        res.status(404).send(err);
      });
  }
}
