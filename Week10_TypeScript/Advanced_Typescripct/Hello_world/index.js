"use strict";
// class Employee {
//   private name: string;
//   private salary: number;
//   public position: string;
//   protected department: string;
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    getBookDetails(isbn) {
        return this.books.find((book) => book.isbn === isbn);
    }
}
const myLibrary = new Library();
myLibrary.addBook({
    title: 'Don Quixote',
    author: 'Miguel De Cerventes',
    isbn: '10. 843167637X',
    publishYear: 1605,
});
console.log(myLibrary);
