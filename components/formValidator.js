
export default class FormValidator {
  constructor(settings, form) {
    this.form = form;
    this.settings = settings;
  }

  showInputError( inputElement, errorMessage) {
    const errorElement = this.form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this.settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this.settings.errorClass);
  }
  hideInputError( inputElement)  {
      const errorElement = this.form.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(this.settings.inputErrorClass);
      errorElement.classList.remove(this.settings.errorClass);
      errorElement.textContent = "";
  };
   checkInputValidity (inputElement)  {
    if (!inputElement.validity.valid) {
      this.showInputError( inputElement, inputElement.validationMessage);
    } else {
      this.hideInputError( inputElement);
    }
  };
  hasInvalidInput(inputList)  {
    return inputList.some((inputElement) => {
      return (!inputElement.validity.valid)
    })
  };
  toggleButtonState (inputList)  {
    const buttonElement = this.form.querySelector(this.settings.submitButtonSelector);
    
    if(this.hasInvalidInput(inputList)){
        buttonElement.classList.add(this.settings.inactiveButtonClass);
        buttonElement.disabled = true;

    }else {
        buttonElement.classList.remove(this.settings.inactiveButtonClass);
        buttonElement.disabled = false;
    }
  };
  setEventListeners() {
    const inputList = Array.from(
      this.form.querySelectorAll(this.settings.inputSelector)
    );
    
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this.checkInputValidity(inputElement);
        this.toggleButtonState(inputList);
      });
      inputElement.addEventListener("focus", () => {
        this.checkInputValidity(inputElement);
        this.toggleButtonState(inputList);
      });
    });
  }

  enableValidation() {
    this.form .addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    this.setEventListeners(this.form, this.settings);
  }
}

