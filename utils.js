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

