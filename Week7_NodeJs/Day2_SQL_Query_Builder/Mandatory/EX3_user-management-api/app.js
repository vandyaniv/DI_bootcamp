const express = require('express');

const app = express();

const userRoute = require('./server/routes/userRoutes.js');
app.use(express.json());

app.use('/api', userRoute);

//
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//  node app.js
