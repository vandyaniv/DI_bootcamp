import chalk from 'chalk';
import express from 'express';
const app = express();

const PORT = 3001;

app.use(express.json());

const datas = [
  { id: 1, title: 'Travel', content: 'Diary' },
  { id: 2, title: 'Food', content: 'Diary' },
  { id: 3, title: 'Tip', content: 'Diary' },
];

const testA = [{ one: 'echo', two: 'echo' }];
// console.table(testA);clear
console.log(chalk.red.bold('testc'));

app.get('/datas', (req, res) => {
  res.json(datas);
  console.log('data sent');
});

app.get('/datas/:id', (req, res) => {
  const datasId = datas.find((p) => p.id === parseInt(req.params.id));
  if (datasId) {
    console.log('Post found with id  :', req.params.id, datasId);
    res.json(datasId);
  } else {
    res.status(404).send('Request not found');
  }
});

app.post('/post', (req, res) => {
  const new_data = {
    id: datas.length + 1,
    title: req.body.story,
    content: req.body.Diary,
  };
  if (!new_data.title || !new_data.content) {
    console.log(
      chalk.bold.red(
        'Missing the data bloc that i want to add id or title or Diary \n',
      ),
    );
    return res.status(404).send('Missing the bloc that i want to add ');
  }
  datas.push(new_data);

  console.log(chalk.bold.green(`Susscessuflly Added 🎉 ${new_data}`));
});

////////// PUT /posts/:id: Update an existing blog post. //////////////

app.put('/datas/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const index = datas.findIndex((item) => item.id == id);

  if (index === -1) {
    return res.status(404).json({ message: ' ID  to update not found' });
  }

  datas[index] = { ...datas[index], title, content };

  res.json({ datas, activ: true, status: 3 });
});

////////DELETE /posts/:id: Delete a blog post

app.delete('/datas/:id', (req, res) => {
  const { id } = req.params;
  const index = datas.findIndex((item) => item.id == id);
  if (index === -1) {
    return res.status(404).json({ message: ' id to delete not found' });
  }

  datas.splice(index, 1);
  res.json(datas);
});

//////// Create a new post

app.post('/datas', (req, res) => {
  console.log(req.body);
  const { title, content } = req.body;
  const newbloc = { title, content, id: datas.length + 1 };
  datas.push(newbloc);
  res.json(datas);
});

app.listen(PORT, () => {
  console.log(`\n Server -> Running on : ${PORT} <-\n`);
});

//     node app.js
