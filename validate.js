//validacion de datos







const showInputError = (formElement, inputElement, errorMessage, settings) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(settings.errorClass);
  };
  
  const hideInputError = (formElement, inputElement, settings) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(settings.inputErrorClass);
    errorElement.classList.remove(settings.errorClass);
    errorElement.textContent = "";
  };
  
  const checkInputValidity = (formElement, inputElement, settings) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, settings);
    } else {
      hideInputError(formElement, inputElement, settings);
    }
  };
  
  const setEventListeners = (formElement, settings) => {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(formElement, inputElement, settings);
      });
    });
  };


  
  const enableValidation = (settings) => {
    const formList = Array.from(document.querySelectorAll(settings.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });
  
      setEventListeners(formElement, settings);
    });
  };

  //habilitar bottones

  const toggleButtonState = (inputList, button, Element, settings) => {
    if(hasInvalidInput(inputList)){
        buttonElement.classList.add(settings.inactiveButtonClass);

    }else {
        buttonElement.classList.remove(settings.inactiveButtonClass);
    }
  };

  //habilitar botones

  function toggleButton()
            {
                var username = document.getElementById('name').value;
                var password = document.getElementById('profesion').value;
                if (username && password) {
                    document.getElementsByClassName("submitButtonSelector").disabled = false;
                } else {
                    document.getElementById("submitButtonSelector").disabled = true;
                }
            }
            
  
 


  const formValues = {
    formSelector: ".form__profile",
    inputSelector: ".form__input",
    submitButtonSelector: "form__create-button",
    inactiveButtonClass: "popup_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
  }; 

  enableValidation(formValues);