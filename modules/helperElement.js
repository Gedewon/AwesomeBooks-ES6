import BooksShelf from './BooksShelf.js';

const allAddedBooks = new BooksShelf();
const booksContainer = document.getElementById('books-dynamic-container');
const title = document.getElementById('title');

function removeBooks() {
  document.querySelectorAll('.remove-btn').forEach((element) => {
    const index = element.id;
    if (!element) return;
    element.addEventListener('click', () => {
      allAddedBooks.removeBook(index);
      window.location.reload();
    });
  });
}

export function reloadBook() {
  const listOfbooks = allAddedBooks.books
    .map(
      (
        bookItem,
        index,
      ) => `<div class="book-item"  ><p class='title-author'><strong>"${bookItem.titleInput}" by ${bookItem.author}.</strong></p>
              <button class='remove-btn' id="${index}">Remove</button>
              </div>`,
    )
    .join('');
  booksContainer.innerHTML = listOfbooks;
  if (allAddedBooks.books.length === 0) {
    booksContainer.style.cssText = 'border: none;';
  }
  removeBooks();
  return listOfbooks;
}

function attach() {
  const titleInput = document.getElementById('title-input');
  const author = document.getElementById('author-input');
  const addBookForm = document.getElementById('form-add-book');

  addBookForm.addEventListener('submit', (event) => {
    // function submitForm(event) {
    event.preventDefault();
    const newBook = {
      titleInput: titleInput.value,
      author: author.value,
    };

    allAddedBooks.addBook(newBook);
    titleInput.value = '';
    author.value = '';
    reloadBook();
  });
}
// eslint-disable-next-line no-unused-vars
export const removeBook = (bookIndex) => {
  allAddedBooks.removeBook(bookIndex);
  reloadBook();
};

const screenElement = {
  list: {
    title: 'All Awesome books',
    content() {
      return reloadBook();
    },
  },
  newBook: {
    title: 'Add a new book',
    content: `<div class="section-con add-book">
      <form method="post" id="form-add-book">
        <input type="text" placeholder="Title" id="title-input" />
        <input type="text" placeholder="Author" id="author-input" />
        <button class="add-btn"  type="submit">Add</button>
      </form>
    </div>`,
  },
  contact: {
    title: 'Contact information',
    content: `<article class="contact">
          <p>Do have any questions or you just want to say "Hello"?
           </p>
           <p>You can reach out to us!</p>
           <ul>
           <li>our e-mail: mail@mail.com</li>
           <li>Our phone number: 0043586534422</li>
           <li>Our address: Streetname 22, 84503 City,Country</li>
           </ul>
      </article > `,
  },
};

export function render(renderAt) {
  const { content } = screenElement[renderAt];
  booksContainer.innerHTML = typeof content === 'function' ? content() : content;
  title.innerHTML = screenElement[renderAt].title;

  booksContainer.style.cssText = renderAt !== 'list' ? 'border: none;' : 'border: 3px solid black;';
  if (renderAt === 'newBook') {
    attach();
  }
}
