const express = require('express');

const { Myrouter } = require('./routes/todos.js');

const app = express();

const PORT = 3001;

app.use(express.json());

app.use('/', Myrouter);

app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

/*
 node app.js
/*


cd /Users/elivanmak/Desktop/DI_bootcamp/Week7_NodeJs/Day1_Routes_Controllers_Middleware/Mandatory/EX2_simple_todoList
*/

// node todos.js
