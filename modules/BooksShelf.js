export default class BooksShelf {
  constructor() {
    if (localStorage.getItem('books') === null) {
      this.books = [];
      return;
    }
    this.books = JSON.parse(localStorage.getItem('books'));
  }

  addBook(book = null) {
    if (book === null) return;
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  removeBook(bookIndex) {
    this.books = this.books.filter(
      (item, index) => index !== parseInt(bookIndex, 10),
    );

    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
