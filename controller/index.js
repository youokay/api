const db = require('../db/index');
const { User } = require('../db/index');
var _ = require('lodash');

// curl -d "@data.json" -H "Content-Type: application/json" -X POST http://localhost:3000/seed

module.exports = {
  checkIn(req, res, next) {
    const number = req.params.phone;
    db.User.updateOne({ phone: number }, { lastCheckIn: new Date })
      .then((result) => res.status(200).send(result))
      .catch(err => res.status(404).json(`Error: ${err}`));
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
    db.User.find({})
      .then((result) => {
        const groups = result.map(user => user.groups).flat()
        const numbers = _.uniq(groups.map(group => group.phoneNumbers).flat())
        res.send(numbers)
      })
      .catch(err => res.status(400).json(`Error: ${err}`));
  }
}
