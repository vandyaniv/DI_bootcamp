const express = require('express');
const app = express();
const chalk = require('chalk');
const dotenv = require('dotenv');
const knex = require('knex');
dotenv.config();
const PORT = 3001;

// require('dotenv').config(); // Charger les variables d'environnement depuis .env

const db = knex({
  client: 'pg',
  connection: {
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
  },
});

app.use(express.json()); // middleware

// table

let posts = [
  { id: 1, title: 'first post', content: ' This the first Post ' },
  {
    id: 2,
    title: 'this is the second post',
    content: 'this is the second post',
  },
  { id: 3, title: 'this is the third post', content: 'the third post ' },
];
// post/ id

// GET /posts/:id: Return a specific blog post based on its id.

app.get('/post/:id', (req, res) => {
  const { id } = req.params;
  db.select('*')
    .from('posts')
    .where({ id })
    .then((post) => {
      if (post.length) {
        res.json(post[0]);
      } else {
        res.status(404).json({ error: 'Post id not found' });
      }
    })
    .catch((err) => res.status(500).json({ error: 'Error request' }));
});

// GET /posts: Return a list of all blog posts.

app.get('/post', (req, res) => {
  db.select('*')
    .from('post')
    .then((post) => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ error: 'Post request not sent, check line' });
      }
    })
    .catch((err) => res.status(500).json({ error: 'Post request not found' }));
});

// POST /posts: Create a new blog post.
// PUT /posts/:id: Update an existing blog post.
// DELETE /posts/:id: Delete a blog post.
// avoid that all time writting memo http://localhost:
app.listen(PORT, () => {
  console.log(
    chalk.red.bgWhite(`Server running on http://localhost:${PORT} <-`),
  );
});
