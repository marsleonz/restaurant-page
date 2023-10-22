export function para(text) {
  const p = document.createElement("p");
  p.textContent = text;
  return p;
}

export function div() {
  return document.createElement("div");
}

export function h2(text) {
  const heading = document.createElement("h2");
  heading.textContent = text;
  return heading;
}

export function ul() {
  return document.createElement("ul");
}

export function li(text) {
  const listItem = document.createElement("li");
  listItem.textContent = text;
  return listItem;
}

export function form() {
  return document.createElement("form");
}

export function input(attrs) {
  const inputElement = document.createElement("input");
  for (const key in attrs) {
    inputElement.setAttribute(key, attrs[key]);
  }
  return inputElement;
}
export function img(src) {
  const image = document.createElement("img");
  image.setAttribute("src", src);
  return image;
}
