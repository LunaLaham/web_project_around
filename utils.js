import { createCard } from "./components/Card.js";

const addbutton = document.querySelector(".profile__add-button");
const popUpAdd = document.querySelector(".popup.popupadd");
const popupProfile = document.querySelector(".popup.profilepopup");
addbutton.addEventListener("click", () => openAdd());

const profileEditButton = document.querySelector(".profile__edit-button");

/*****CITY POPUP */
const botoCity = document.querySelector(".profile__info");
const popUpCity = document.querySelector(".popup.form");

function openAdd() {
  console.log("evento click");
  popUpAdd.classList.add("popup__disable");
}
const closeButton = document.querySelector(".popup .popup__close");
closeButton.addEventListener("click", () => closeCity());
function closeCity() {
  popupProfile.classList.remove("popup__disable");
}
profileEditButton.addEventListener("click", () => openPopupProfile());
function openPopupProfile() {
  console.log("click");
  popupProfile.classList.add("popup__disable");
}

const closeAddButton = document.querySelector(".popupadd .popup__close");
closeAddButton.addEventListener("click", () => closeAdd());
function closeAdd() {
  popUpAdd.classList.remove("popup__disable");
}

const inputName = document.querySelector("#name");
const inputProfesion = document.querySelector("#profesion");

const profileName = document.querySelector("#profile-name");
const profileProfesion = document.querySelector("#profile-profesion");

const profileForm = document.querySelector("#profile-form");

profileForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (inputName.value === "" || inputProfesion.value === "") {
    return;
  }
  profileName.textContent = inputName.value;
  profileProfesion.textContent = inputProfesion.value;
});

function closeWithEsc(event) {
  if (event.key === "Escape") {
    closeCity();
    closeAdd();
  }
}
document.addEventListener("keydown", (event) => closeWithEsc(event));

profileForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (inputName.value === "" || inputProfesion.value === "") {
    return;
  }
  profileName.textContent = inputName.value;
  profileProfesion.textContent = inputProfesion.value;
});

const profileAddForm = document.querySelector("#profileadd-form");
const addName = document.querySelector("#nameToAdd");
const addURL = document.querySelector("#urlToadd");
const elements = document.querySelector(".elements");

profileAddForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (addName.value === "" || addURL.value === "") {
    return;
  }
  const cardElement = createCard({ name: addName.value, link: addURL.value });
  elements.insertBefore(cardElement, elements.firstChild);
  closeAdd();
});
