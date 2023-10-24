import { para, div, h2, ul, li, img } from "./helper/addContent";
import vegSpring from "./images/vegspring.png";
import spinachDip from "./images/spinachDip.jpg";
import vegetableLasanga from "./images/vegetableLasanga.png";
import eggplantPermesan from "./images/eggplantPermesan.png";
import chocolateCake from "./images/chocolateCake.png";
import fruitTart from "./images/fruitTart.png";
import freshOrangeJuice from "./images/freshOrangeJuice.png";
import icedCoffee from "./images/icedCoffee.jpg";
const menuData = [
  {
    title: "Appetizers",
    items: [
      {
        name: "Vegetable Spring Rolls",
        description: "Crispy rolls filled with fresh vegetables.",
        imageSrc: vegSpring,
      },
      {
        name: "Spinach and Artichoke Dip",
        description: "Creamy dip with spinach and artichokes.",
        imageSrc: spinachDip,
      },
      // Add more appetizers with images
    ],
  },
  {
    title: "Main Courses",
    items: [
      {
        name: "Vegetable Lasagna",
        description: "Layers of pasta, vegetables, and cheese.",
        imageSrc: vegetableLasanga,
      },
      {
        name: "Eggplant Parmesan",
        description: "Breaded eggplant with tomato sauce and cheese.",
        imageSrc: eggplantPermesan,
      },
      // Add more main courses with images
    ],
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Chocolate Cake",
        description: "Rich and moist chocolate cake.",
        imageSrc: chocolateCake,
      },
      {
        name: "Fruit Tart",
        description: "Fresh fruits on a buttery pastry crust.",
        imageSrc: fruitTart,
      },
      // Add more desserts with images
    ],
  },
  {
    title: "Beverages",
    items: [
      {
        name: "Fresh Orange Juice",
        description: "Squeezed from the juiciest oranges.",
        imageSrc: freshOrangeJuice,
      },
      {
        name: "Iced Coffee",
        description: "Chilled coffee with a hint of sweetness.",
        imageSrc: icedCoffee,
      },
      // Add more beverages with images
    ],
  },
  {
    title: "Daily Specials",
    content:
      "Don't forget to ask about our chef's daily specials. Each day, we feature a unique and delectable dish that will tantalize your taste buds.",
  },
];

const createMenuSection = (data) => {
  const section = document.createElement("div");
  section.appendChild(h2(data.title));

  if (data.items) {
    const list = ul();
    data.items.forEach((item) => {
      const listItem = li();
      const itemImage = img(item.imageSrc);
      const itemDescription = para(`${item.name}: ${item.description}`);
      listItem.appendChild(itemImage);
      listItem.appendChild(itemDescription);
      list.appendChild(listItem);
      itemImage.classList.add("image");
      listItem.classList.add("section");
    });
    section.appendChild(list);
  } else {
    section.appendChild(para(data.content));
  }

  section.classList.add("menu-section");
  return section;
};

const exploreMenu = () => {
  const exploreMenu = document.createElement("div");
  menuData.forEach((data) => exploreMenu.appendChild(createMenuSection(data)));

  return exploreMenu;
};

export default exploreMenu();
