let book = [
  {
    id: 1,
    title: 'sophis world',
    author: 'J. Gaarder',
    publishYear: '1996',
  },
  {
    id: 2,
    title: 'Searching the time',
    author: 'M.Proust ',
    publishYear: '1906',
  },
];

// GET ; function = () => retunr [{}]
const getAllBooks = () => {
  return book;
};

// GET ; function = (id) => retunr [{1, 4, ect }]

const getAllByID = (id) => {
  return book.find((book) => book.id === id);
};

const createBook = (title, author, publishYear) => {
  const newBook = {
    id: book.length + 1,
    title,
    author,
    publishYear,
  };
  book.push(newBook);
  return newBook;
};

module.exports = {
  createBook,
  getAllBooks,
  getAllByID,
};
