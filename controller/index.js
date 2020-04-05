const db = require('../db/index');
const { User } = require('../db/index');
var _ = require('lodash');

// curl -d "@data.json" -H "Content-Type: application/json" -X POST http://localhost:3000/seed

module.exports = {
  checkIn(req, res, next) {
    console.log('checked in');
    res.send('<h2>Thanks for checking in!</h2>');
  },
  seedUser(req, res, next) {
    const data = req.body;
    const number = data.phone;
    const user = new User(data);
    db.User.updateOne({ phone: number }, user, { upsert: true })
      .then(result => {
        res.status(201).send(result);
      })
      .catch(err => {
        res.status(404).send(err);
      });
  },
  numbers(req, res, next) {
    const number = req.params.phone
    db.User.findOne({ phone: number })
      .then((result) => res.status(200).send(_.uniq(result.groups.map(group => group.phoneNumbers).flat())))
      .catch(err => res.status(400).json(`Error: ${err}`));
  }
}
