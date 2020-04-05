// Daily checkin chron job
require('dotenv').config();
const axios = require('axios');
const fetchNumbersURL = `${process.env.SERVICE_URL}:8080/numbers`;
// twilio client
const twilio = require('../controller/twilio');

// Get all phone numbers from database and send check-in link
exports.func = () => {
  // need to make an http request to /numbers
  axios.get(fetchNumbersURL)
    .then(res => {
      const numbers = res.data;
      // send texts to checkin
      twilio.sendCheckin(numbers);
    })
    .catch(err => {
      console.log(err);
    })
}

