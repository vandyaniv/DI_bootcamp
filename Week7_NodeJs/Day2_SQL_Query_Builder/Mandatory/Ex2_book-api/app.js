const express = require('express');
const app = express();
const bookRoutes = require('./server/routes/Routes.js');

// midd

app.use(express.json());

app.use('/api/book', bookRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(` SERVER RUNNING ON http://localhost:${PORT}`);
});

/*

node app.js

*/
