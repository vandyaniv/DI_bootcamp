const express = require('express');
const { simpleRouter } = require('./routes');

const app = express();

const PORT = 3002;

app.use('/', simpleRouter);

app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

//   node app.js
