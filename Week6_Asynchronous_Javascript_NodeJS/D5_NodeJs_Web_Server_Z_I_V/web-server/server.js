const express = require('express');
const { getUsers } = require('./info.js');

const app = express();

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});
// console.log(__dirname+'/public');

app.use('/', express.static(__dirname + '/public'));

app.get('/aboutme', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

/**
 * app.get()
 * app.post()
 *
 */

app.get('/home', (req, res) => {
  res.send('<h1> my first server</h1>');
});

const products = [
  { id: 1, name: 'iPhone', price: 900 },
  { id: 2, name: 'iPad', price: 800 },
  { id: 3, name: 'iWatch', price: 1900 },
];

// app.get('/products', (req, res) => {
//   // console.log(req);
//   res.json(products);
// });

app.get('/users', async (req, res) => {
  try {
    const data = await getUsers('https://jsonplaceholder.typicode.com/users');
    res.json(data);
  } catch (e) {
    console.log(e);
  }
  // res.send('ok')
  //   getUsers("https://jsonplaceholder.typicode.com/users")
  //     .then((data) => {
  //       res.json(data);
  //     })
  //     .catch((e) => console.log(e));
});
