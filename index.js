import FormValidator from "./components/formValidator.js";
import { createCard } from "./components/Card.js";
import Section from "./components/section.js";
import PopupWithForm from "./components/PopupWithForm.js";
import Popup from "./components/popup.js";
import UserInfo from "./components/UserInfo.js";

const addbutton = document.querySelector(".profile__add-button");
const UserData = new UserInfo(".profile__title", ".profile__description");

const profileForm = document.querySelector("#profile-form");
const profileCard = document.querySelector("#profileadd-form");

const addCardPopup = new PopupWithForm(".popupadd");

const userInfoPopup = new PopupWithForm(".profilepopup");
//const otravariable = new PopupWithForm
userInfoPopup.setEventListeners();
const profileEditButton = document.querySelector(".profile__edit-button");
profileEditButton.addEventListener("click", () => {
  userInfoPopup.open();
});

const userAddPopup = new PopupWithForm(".popupadd");
userInfoPopup.setEventListeners();
const profileAddButton = document.querySelector(".profile__add-button");
profileAddButton.addEventListener("click", () => {
  userAddPopup.open();
});

//1.-
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    let formValidate = new FormValidator(settings, formElement);
    formValidate.setEventListeners();
  });
};
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});

const elements = document.querySelector(".cards__list");
//
//initialCards.forEach((item) => {
//const cardNode = createCard(item);
//elements.append(cardNode);
//});

const cardlist = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      cardlist.addItem(createCard(data));
    },
  },
  ".cards__list"
);

cardlist.renderItems();

const infoValidator = new FormValidator(enableValidation, profileForm);
infoValidator.enableValidation();

const cardValidator = new FormValidator(enableValidation, profileCard);
cardValidator.enableValidation();
