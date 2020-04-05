const db = require('../db/index');
const { User } = require('../db/index');
var _ = require('lodash');

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
    db.User.find({})
      .then((result) => {
        const groups = _.flatten(result.map(user => user.groups));
        const numbers = _.uniq(_.flatten(groups.map(group => group.phoneNumbers)));
        res.status(200).send(numbers)
      })
      .catch(err => res.status(400).json(`Error: ${err}`));
  }
}
