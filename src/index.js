import "./style.css";
import home from "./home";
import menu from "./menu";
import contact from "./contact";

const createButton = (name, content) => {
  const button = document.createElement("button");
  button.textContent = name;
  button.addEventListener("click", () => {
    body.textContent = ""; // Clear the current content
    body.appendChild(content); // Append the imported content
  });
  buttons.appendChild(button);
};

const main = document.querySelector("#content");
main.classList.add("content");
const header = document.createElement("div");
header.textContent = "Manik's Restaurant";
main.appendChild(header);
const body = document.createElement("div");
body.appendChild(home);
const footer = document.createElement("div");
footer.textContent = "Copyright © 2023 Manik Shah";

const buttons = document.createElement("div");
buttons.classList.add("buttons");

createButton("Home", home); // Pass the imported 'home' content
createButton("Menu", menu);
createButton("Contact", contact);

const buttonElements = buttons.querySelectorAll("button");
buttonElements.forEach((btn) => buttons.appendChild(btn));
header.classList.add("header");
body.classList.add("body");
footer.classList.add("footer");
header.appendChild(buttons);
main.appendChild(body);
main.appendChild(footer);
