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
  const createEl = (tag, className) => {
    const el = document.createElement(tag);
    el.classList.add(className);
    return el;
  };
  
  const toggleHeart = (heartElement) => {
    if (heartElement.src.includes("/images/Group.svg"))
      heartElement.src = "./images/Union.png";
    else heartElement.src = "./images/Group.svg";
  };
  
  const imagePopup = document.querySelector(".popup.imagepopup");
  const imagePreview = document.querySelector(".imagePreview");
  imagePopup.addEventListener("click", () => closeImagePreview());
  const closeImagePreview=()=>{
    imagePopup.classList.add("popup_disable");
  }
  const openImage = (imageSrc, name) => {
    imagePopup.classList.remove("popup_disable");
    imagePreview.src=imageSrc;
    imagePreview.alt=name;
    //SErt the image URL to imageSrc
  };
  const elements = document.querySelector(".elements");
  
  const createCard = (card) => {
    const elementDiv = createEl("div", "element");
    const imageElement = createEl("img", "element__image");
    const trashElement = createEl("img", "element__trash");
    const textContainer = createEl("div", "element__text");
    const titleElement = createEl("h2", "element__text-dos");
    const heartElement = createEl("img", "element__heart");
    
    const activeHeartElement = createEl("img", "element__heart-activo");
  
    imageElement.src = card.link;
    imageElement.alt = card.name;
    imageElement.addEventListener("click", () => openImage(imageElement.src, card.name));
  
  
    trashElement.src = "./images/Trash.svg";
    trashElement.alt = "boton basura";
    trashElement.addEventListener("click", (e) => eliminar(e));
  
    titleElement.textContent = card.name;
    heartElement.src = "./images/Group.svg";
    heartElement.alt = "boton de corazon";
    heartElement.addEventListener("click", () => toggleHeart(heartElement));
  
    activeHeartElement.src = "./images/Group.svg";
    activeHeartElement.alt = "boton de corazon";
  
    textContainer.append(titleElement, heartElement, activeHeartElement);
    elementDiv.append(imageElement, trashElement, textContainer);
    return elementDiv;
  };
  initialCards.forEach((card) => {
    const elementDiv=new Card(card.name, card.link);
    elements.appendChild(elementDiv.generateCard());
  });
  
  
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

