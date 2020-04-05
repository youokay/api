const express = require('express');
const PORT = 3000 || process.env.PORT;
const app = express();

// TO DO static files here

app.get('/', (req, res, next) => {
  res.send('<h1>Hello</h1>');
  console.log('check');
})

// spin up
app.listen(PORT, () => {
  console.log('Listening on port :', PORT);
})

