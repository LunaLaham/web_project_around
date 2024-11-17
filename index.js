import Card from "./card.js"; 

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

       
const formValues = {
    formSelector: ".form__profile",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__create-button",
    inactiveButtonClass: "popup_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
  }; 

const elements = document.querySelector(".elements");

function createCard(item) {
  const card = new Card(item.name, item.link, ".template-card");
  return card.generateCard();
}

initialCards.forEach((item) => {
  const cardNode = createCard(item);
  elements.append(cardNode)
});

/*
const formValidatorPRofile = new formValidator(formValues, document.querySelector('.profile'))
formValidatorPRofile.enableValidation()
*/


 // Capturo botones y variables
 const botoCity = document.querySelector(".profile__button");
 const addbutton = document.querySelector(".profile__add-button");
 
 const popUpCity = document.querySelector(".popup.form");
 const popUpAdd = document.querySelector(".popup.popupadd");
 
 botoCity.addEventListener("click", () => openCity());
 addbutton.addEventListener("click", () => openAdd());
 function openCity() {
   popUpCity.classList.remove("popup_disable");
 }
 function openAdd() {
   popUpAdd.classList.remove("popup_disable");
 }
 
 const closeButton = document.querySelector(".popup .form__close-button");
 closeButton.addEventListener("click", () => closeCity());
 function closeCity() {
   popUpCity.classList.add("popup_disable");
 }
 
 const closeAddButton = document.querySelector(".popupadd .form__close-button");
 closeAddButton.addEventListener("click", () => closeAdd());
 function closeAdd() {
   popUpAdd.classList.add("popup_disable");
 }
 
 //funcion eliminar trash
 const deleteButton = document.querySelectorAll(".element__trash");
 
 deleteButton.forEach((e) => {
   // e.addEventListener("click", (e) => eliminar(e));
 });
 
 function eliminar(e) {
   e.srcElement.offsetParent.remove();
 }
 
 //funcion boton crear
 const submitButton = document.querySelector(".form__create-button");
 
 submitButton.addEventListener("click", () => closeCity());
 function crearCity() {
   popUpCity.classList.add("form__create-button");
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
 
 const profileAddForm = document.querySelector("#profileadd-form");
 const addName = document.querySelector("#nameToAdd");
 const addURL = document.querySelector("#urlToadd");
 profileAddForm.addEventListener("submit", function (evt) {
   evt.preventDefault();
   if (addName.value === "" || addURL.value === "") {
     return;
  }
   const cardElement=createCard({name:addName.value,link:addURL.value});
   elements.insertBefore(cardElement, elements.firstChild);
   closeAdd();
 });
 
 
 
   
   function closeWithEsc(event) {
     if (event.key === "Escape") {
       closeCity();
       closeAdd();
       
     }
   };
   document.addEventListener("keydown", (event) => closeWithEsc(event));
