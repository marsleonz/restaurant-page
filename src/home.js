import { para, div, h2 } from "./helper/addContent";

// Data for your home page
const homeData = [
  {
    title: "Welcome to Manik's Restaurant",
    content:
      "At Manik's Restaurant, we're dedicated to providing you with an exceptional dining experience. Our restaurant is a perfect blend of culinary art and ambiance, making it the ideal destination for food enthusiasts.",
  },
  {
    title: "About Us",
    content:
      "Established in 2023, Manik's Restaurant has been serving our community with delicious and memorable meals. Our mission is to create a cozy, welcoming environment where you can savor exceptional cuisine and create lasting memories with friends and family.",
  },
  {
    title: "Special Offers",
    content:
      "Discover our mouthwatering daily specials, exclusive promotions, and seasonal events. Don't miss out on our Happy Hour deals and special holiday menus.",
  },
  {
    title: "Customer Reviews",
    content:
      "Our customers love us! Here's what they're saying:\n- 'The food here is incredible. I keep coming back for more!'\n- 'A wonderful place to celebrate special occasions.'\n- 'Friendly staff and top-notch service.'",
  },
  {
    title: "Reserve Your Table",
    content:
      "Ready to enjoy an exquisite dining experience? Make a reservation now and secure your spot at Manik's Restaurant.",
  },
  {
    title: "Follow Us",
    content:
      "Stay connected with us on social media to receive the latest updates, promotions, and special offers.",
  },
];

const createSection = (data) => {
  const section = document.createElement("div");
  section.appendChild(h2(data.title));
  section.appendChild(para(data.content));
  return section;
};

const home = () => {
  const home = document.createElement("div");
  homeData.forEach((data) => home.appendChild(createSection(data)));
  return home;
};

export default home();
