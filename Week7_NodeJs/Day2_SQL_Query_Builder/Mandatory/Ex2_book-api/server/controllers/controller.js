const Book = require('../models/bookModel.js');

// # here ; get all the spefic id of a book
const getAllByID = (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = Book.getAllByID(bookId);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: 'Book Id not found ' });
  }
};

// # here ; post create a new book
const createBook = (req, res) => {
  const { title, author, publishYear } = req.body;
  const newBook = Book.createBook(title, author, publishYear);
  res.status(200).json(newBook);
};

// # here : get all the book

const getAllBooks = (req, res) => {
  res.json(Book.getAllBooks());
};

// nuh nuh lot of information should check fast cannot lose 2 hours just on one little things

module.exports = {
  getAllBooks,
  getAllByID,
  createBook,
};
