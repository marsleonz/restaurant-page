import { para, div, h2, ul, li, form, input } from "./helper/addContent";

const contactData = {
  name: "Manik's Restaurant",
  address: "Biratnagar-8",
  phone: "+977 7077140850",
  email: "marsleonz@gmail.com",
  businessHours: {
    weekdays: {
      openingTime: "6 AM",
      closingTime: "8 PM",
    },
  },
  reservationForm: [
    "Name",
    "Email",
    "Phone",
    "Date",
    "Time",
    "Number of Guests",
  ],
  feedbackForm: ["Name", "Email", "Subject", "Message"],
  stayConnected:
    "Follow us on social media to stay updated on our latest events, promotions, and menu additions.",
  directions:
    "Find your way to [Your Restaurant Name] with our easy-to-follow directions from the nearest landmarks and major roads.",
};

const createContactSection = (title, content) => {
  const section = document.createElement("div");
  section.appendChild(h2(title));

  if (Array.isArray(content)) {
    const list = ul();
    content.forEach((item) => list.appendChild(li(item)));
    section.appendChild(list);
  } else if (typeof content === "object") {
    const openingTime = content.weekdays.openingTime;
    const closingTime = content.weekdays.closingTime;
    const weekdays = `Monday - Friday: ${openingTime} - ${closingTime}`;
    const weekends = `Saturday - Sunday: ${openingTime} - ${closingTime}`;
    section.appendChild(para(weekdays));
    section.appendChild(para(weekends));
  } else {
    section.appendChild(para(content));
  }

  return section;
};

const contact = () => {
  const contact = document.createElement("div");
  contact.appendChild(para(`Contact ${contactData.name}`));
  contact.appendChild(createContactSection("Address", contactData.address));
  contact.appendChild(createContactSection("Phone", contactData.phone));
  contact.appendChild(createContactSection("Email", contactData.email));
  contact.appendChild(
    createContactSection("Business Hours", contactData.businessHours)
  );
  contact.appendChild(para("Reservations"));
  const reservationForm = form();
  contactData.reservationForm.forEach((item) => {
    const inputElement = input({ placeholder: item });
    reservationForm.appendChild(inputElement);
  });
  contact.appendChild(reservationForm);
  contact.appendChild(para("Your Feedback"));
  const feedbackForm = form();
  contactData.feedbackForm.forEach((item) => {
    const inputElement = input({ placeholder: item });
    feedbackForm.appendChild(inputElement);
  });
  contact.appendChild(feedbackForm);
  contact.appendChild(
    createContactSection("Stay Connected", contactData.stayConnected)
  );
  contact.appendChild(
    createContactSection("Directions", contactData.directions)
  );

  return contact;
};

export default contact();
