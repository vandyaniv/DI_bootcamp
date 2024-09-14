import chalk from 'chalk';
import express from 'express';
import { fetchPosts } from './data/dataService.js';
fetchPosts();

const app = express();
const PORT = 5001;

app.use(express.json());

app.listen(PORT, () => {
  console.log(chalk.white.bold.bgBlack(`\n Server running on --> ${PORT} \n`));
});

app.get('/post', async (req, res) => {
  try {
    const data = await fetchPosts();
    res.json(data);
  } catch (e) {
    console.log(e);
  }
});

// node app.js
