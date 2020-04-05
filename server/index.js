const express = require('express');
const PORT = 3000 || process.env.PORT;
const app = express();
const controller = require('../controller/index');

// TO DO static files here

// sanity check
app.get('/', (req, res, next) => {
  res.send('<h1>Hello</h1>');
  console.log('check');
})

app.get('/checkin/:phone', controller.checkIn);

// spin up
app.listen(PORT, () => {
  console.log('Listening on port :', PORT);
})

