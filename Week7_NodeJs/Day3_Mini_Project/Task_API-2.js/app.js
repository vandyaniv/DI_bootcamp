const express = require('express');
const path = require('path');
const app = express();
const bcrypt = require('bcrypt');
const userRoute = require('./server/routes/userRoutes');
require('dotenv').config();

const PORT = process.env.PORT || 5004;

app.use(express.json());

app.get('/', function (req, res) {
  // check the public if all or just index later
  res.sendFile(path.join(__dirname, 'public'), function (err) {
    if (err) {
      console.log('error sending the request : ', error);
    } else {
      console.log('successfully send ');
    }
  });
});
///

app.use('/api/routes/user', userRoute);
app.listen(PORT, () => {
  console.log(`running on http://localhost ${PORT}`);
});

/*

node app.js 

*/
