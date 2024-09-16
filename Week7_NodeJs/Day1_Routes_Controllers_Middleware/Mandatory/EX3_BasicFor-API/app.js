const express = require('express');

const { Bookrouter } = require('./routes/book.js');

const app = express();

const PORT = 3001;

app.use(express.json());

app.use('/books', Bookrouter);

app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

// node app.js
// node book.js
