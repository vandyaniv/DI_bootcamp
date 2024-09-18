const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5004;
const taskRoutes = require('./server/routes/routes.js');

app.use(express.json());

app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});

/*  

node app.js

*/
