import { reloadBook } from "./helperElement.js";
export const screenElement = {
  list: {
    title: "All Awesome books",
    content() {
      return reloadBook();
    },
  },
  newBook: {
    title: "Add a new book",
    content: `<div class="section-con add-book">
      <form method="post" id="form-add-book">
        <input type="text" placeholder="Title" id="title-input" />
        <input type="text" placeholder="Author" id="author-input" />
        <button class="add-btn"  type="submit">Add</button>
      </form>
    </div>`,
  },
  contact: {
    title: "Contact information",
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
