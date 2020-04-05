const express = require('express');
const config = require('../env.config.js');
const PORT = config.SERVICE_PORT;
const app = express();
const controller = require('../controller/index');
const db = require('../db/index.js');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

// TO DO static files here

// sanity check
app.get('/', (req, res, next) => {
  res.send('<h1>Hello</h1>');
  console.log('check');
})

// routes
app.put('/checkin/:phone', controller.checkIn);
app.post('/seed', controller.seedUser);
app.get('/numbers', controller.numbers)

// spin up
app.listen(PORT, () => {
  console.log('Listening on port :', PORT);
})

