import { screenElement } from "./ScreenElement.js";
import BooksShelf from "./BooksShelf.js";
const allAddedBooks = new BooksShelf();
const booksContainer = document.getElementById("books-dynamic-container");
const title = document.getElementById("title");

export function removeBooks() {
  document.querySelectorAll(".remove-btn").forEach((element) => {
    let index = element.id;
    if (!element) return;
    element.addEventListener("click", () => {
      allAddedBooks.removeBook(index);
      reloadBook();
    });
  });
}

export function reloadBook() {
  const listOfbooks = allAddedBooks.books
    .map(
      (
        bookItem,
        index
      ) => `<div class="book-item"  ><p class='title-author'><strong>"${bookItem.titleInput}" by ${bookItem.author}.</strong></p>
              <button class='remove-btn' id="${index}">Remove</button>
              </div>`
    )
    .join("");
  booksContainer.innerHTML = listOfbooks;
  removeBooks();
  if (allAddedBooks.books.length === 0) {
    booksContainer.style.cssText = "border: none;";
  }
  return listOfbooks;
}

function attach() {
  const titleInput = document.getElementById("title-input");
  const author = document.getElementById("author-input");
  const addBookForm = document.getElementById("form-add-book");

  addBookForm.addEventListener("submit", (event) => {
    // function submitForm(event) {
    event.preventDefault();
    const newBook = {
      titleInput: titleInput.value,
      author: author.value,
    };

    allAddedBooks.addBook(newBook);
    titleInput.value = "";
    author.value = "";
    reloadBook();
  });
  //   const removeBooks = document.querySelectorAll(".remove-btn");
  //   removeBooks.forEach((element) => {
  //     let index = element.target.id;
  //     element.addEventListener("click", () => {
  //       console.log("hi");
  //     });
  //   });
}
// eslint-disable-next-line no-unused-vars
export const removeBook = (bookIndex) => {
  console.log("hi");
  allAddedBooks.removeBook(bookIndex);
  reloadBook();
};

export function render(renderAt) {
  const { content } = screenElement[renderAt];
  booksContainer.innerHTML =
    typeof content === "function" ? content() : content;
  title.innerHTML = screenElement[renderAt].title;

  booksContainer.style.cssText =
    renderAt !== "list" ? "border: none;" : "border: 3px solid black;";
  if (renderAt === "newBook") {
    attach();
  }
}
