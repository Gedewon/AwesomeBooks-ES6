import {
  reloadBook as initialize,
  render,
  removeBook,
  removeBooks,
} from "./modules/helperElement.js";

const timeDate = document.querySelector("#time-date");

timeDate.innerHTML = new Date();

initialize();

document.querySelector("nav").addEventListener("click", (e) => {
  switch (e.target.id) {
    case "list":
      render("list");
      break;
    case "newBook":
      render("newBook");
      break;
    case "contact":
      render("contact");
      break;
    default:
      break;
  }
});
