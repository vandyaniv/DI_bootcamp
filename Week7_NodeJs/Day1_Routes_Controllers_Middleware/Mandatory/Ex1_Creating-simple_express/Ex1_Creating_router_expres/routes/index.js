/// Step 4
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('welcome to route');
});

router.get('/about', (req, res) => {
  res.send('welcome to me -> http://localhost:3002/about  ');
});

module.exports = {
  simpleRouter: router,
};

///    node index.js
