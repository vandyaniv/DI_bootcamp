import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBooks, selectDystopianBooks, selectFantasticBooks, selectRomanBooks } from '../books/booksSlice';

const BookList = () => {
  const [genre, setGenre] = useState('all');

  const allBooks = useSelector(selectBooks);
  const dystopianBooks = useSelector(selectDystopianBooks);
  const fantasticBooks = useSelector(selectFantasticBooks);
  const romanBooks = useSelector(selectRomanBooks);

  let books;
  if (genre === 'dystopian') {
    books = dystopianBooks;
  } else if (genre === 'fantastic') {
    books = fantasticBooks;
  } else if (genre === 'roman') {
    books = romanBooks;
  } else {
    books = allBooks;
  }

  return (
    <div>
      <h1>Book Inventory</h1>
      <div>
        <button onClick={() => setGenre('all')}>All</button>
        <button onClick={() => setGenre('dystopian')}>Dystopian</button>
        <button onClick={() => setGenre('fantastic')}>Fantastic</button>
        <button onClick={() => setGenre('roman')}>Roman</button>
      </div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} - {book.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
