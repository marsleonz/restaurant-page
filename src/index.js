import "./style.css";
import home from "./home";
import menu from "./menu";
import contact from "./contact";

const main = document.querySelector("#content");
main.classList.add("content");
const header = createMainHeader();
const body = createMainBody(home);
main.appendChild(header);
main.appendChild(body);
main.appendChild(createFooter());

function createMainHeader() {
  const header = document.createElement("div");
  header.textContent = "Manik's Restaurant";
  header.classList.add("header");
  header.appendChild(createButtons());
  return header;
}

function createButtons() {
  const buttons = document.createElement("div");
  buttons.classList.add("buttons");
  buttons.addEventListener("click", handleButtonClick);
  buttons.appendChild(createButton("Home", home, true)); // Pass true to indicate active
  buttons.appendChild(createButton("Menu", menu));
  buttons.appendChild(createButton("Contact", contact));
  return buttons;
}

function handleButtonClick(event) {
  if (event.target.tagName === "BUTTON") {
    const content = getContentForButton(event.target.textContent);
    if (content) {
      body.textContent = "";
      body.appendChild(content);
      setActiveButton(event.target);
    }
  }
}

function getContentForButton(buttonText) {
  switch (buttonText) {
    case "Home":
      return home;
    case "Menu":
      return menu;
    case "Contact":
      return contact;
    default:
      return null;
  }
}

function setActiveButton(button) {
  const buttons = button.parentNode.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
  button.classList.add("active");
}

function createMainBody(initialContent) {
  const body = document.createElement("div");
  body.classList.add("body");
  body.appendChild(initialContent);
  return body;
}

function createButton(name, content, isActive = false) {
  const button = document.createElement("button");
  button.textContent = name;
  if (isActive) {
    button.classList.add("active");
  }
  return button;
}

function createFooter() {
  const footer = document.createElement("div");
  footer.textContent = "Copyright © 2023 Manik Shah";
  footer.classList.add("footer");
  return footer;
}
