import { reloadBook as initialize, render } from "./modules/helperElement.js";
import { DateTime } from "./modules/luxon.js";
const timeDate = document.querySelector("#time-date");

setInterval(() => {
  timeDate.innerHTML = DateTime.now().toLocaleString(
    DateTime.DATETIME_FULL_WITH_SECONDS
  );
}, 60);

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
