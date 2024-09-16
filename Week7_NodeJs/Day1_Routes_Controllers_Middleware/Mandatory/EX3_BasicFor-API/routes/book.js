const express = require('express');
const router = express.Router();

const books = [];

// #1 Get all the [ ] books
router.get('/', (req, res) => {
  res.status(200).json({ message: ' List of book  ' });
});

// #2 (create_ add one book to books [ ])
router.post('/', (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.title,
  };
  books.push(newBook);
  res.status(200).json(books);
});

// #3 Uptating books.id [1: 0, title : x, author: y]

router.post('/', (req, res) => {
  const id = parseInt(req.body.id === id, 10);
  const BookIndex = books.findIndex((book) => book.id === id);

  if (BookIndex === -1) {
    return res.status(404).json({ Error: ' Book not f1ound ' });
  }
  books[BookIndex] = {
    id: id,
    title: req.body.title,
    author: req.body.author,
  };
});

// #4 Delete book by ID [ ]

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const bookIndex = books.findIndex((item) => item.id === id);
  if (bookIndex === -1) {
    return res.status(404).json({ Error: ' not foud ' });
  }
  const deteletBook = books.splice(bookIndex, 1);
  res.status(200).json(deteletBook);
});

module.exports = {
  Bookrouter: router,
};
