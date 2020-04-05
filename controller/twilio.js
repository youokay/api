require('dotenv').config()
const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;
const server = `${process.env.SERVICE_URL}`
const client = require('twilio')(accountSid, authToken);

const sendCheckin = (numbers) => {
  numbers.forEach(number => {
    const uniqueLink = `${server}:8080/checkin/${number}`;
    client.messages
      .create({
        body: `Good morning! Click the link to checkin ${uniqueLink}`,
        from: '+12052363233',
        to: number
      })
      .then(message => console.log(message.sid));
  })
}

module.exports = { sendCheckin }