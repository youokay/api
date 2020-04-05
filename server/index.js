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
// To check any of the routes from the command line you can use curl, for example for /seed
// curl -d "@data.json" -H "Content-Type: application/json" -X POST http://localhost:4444/seed
app.put('/checkin/:phone', controller.checkIn);
app.post('/seed', controller.seedUser);
app.get('/numbers', controller.numbers)

// spin up
app.listen(PORT, () => {
  console.log('Listening on port :', PORT);
})

