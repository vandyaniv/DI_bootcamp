import chalk from 'chalk';
import express from 'express';
const app = express();
const PORT = 5001;
// im on mac 5000 = airplay

app.use(express.json());

const Book = [
  { id: 1, title: 'The Republic', author: 'plato', publishedYear: -380 },
  {
    id: 2,
    title: 'Sophis world',
    author: 'Jostein Gaarder',
    publishedYear: 1991,
  },

  { id: 3, title: '1984', author: 'George Orweil', publishedYear: 1965 },
];

app.listen(PORT, () => {
  console.log(
    chalk.white.bold.bgBlackBright(`\n Server running on --> ${PORT} \n`),
  );
});

app.get('/express/Book', (req, res) => {
  console.table(Book);

  res.json(Book);
});

app.get('/express/Book/:id', (req, res) => {
  const { id } = req.params;
  const mybooks = Book.find((item) => item.id == id);
  if (!mybooks) return res.status(404).json({ message: 'Book not found' });

  console.table([mybooks]);

  res.status(200).json(mybooks);
});

app.post('/express/Book', (req, res) => {
  console.log(chalk.green('Before adding : '));
  console.table(req.body);

  const { title, author, publishedYear } = req.body;

  const newBook = { title, author, publishedYear, id: Book.length + 1 };

  Book.push(newBook);
  console.log(chalk.green('\n \n After adding : '));
  console.table(Book);

  res.status(200).json(Book);
});

/*

{
  "id": 4,
  "title": "Harry Potter and the Philosopher's Stone",
  "author": "J.K. Rowling",
  "publishedYear": 1997
}

*/
