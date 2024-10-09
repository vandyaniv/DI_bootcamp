import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: 1, title: '1984', author: 'George Orwell', genre: 'dystopian' },
    { id: 2, title: 'Harry Potter', author: 'J.K. Rowling', genre: 'fantastic' },
    { id: 3, title: 'The Shining', author: 'Stephen King', genre: 'roman' },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export const selectBooks = (state) => state.books.books;

export const selectDystopianBooks = createSelector(selectBooks, (books) => books.filter((book) => book.genre === 'dystopian'));

export const selectFantasticBooks = createSelector(selectBooks, (books) => books.filter((book) => book.genre === 'fantastic'));

export const selectRomanBooks = createSelector(selectBooks, (books) => books.filter((book) => book.genre === 'roman'));

export default booksSlice.reducer;
