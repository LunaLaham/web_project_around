
class formValidator {
  constructor(settings, form) {
    this.form = form;
    this.settings = settings;
  }

  showInputError(formElement, inputElement, errorMessage, settings) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(settings.errorClass);
  }

  setEventListeners(formElement, settings) {
    const inputList = Array.from(
      formElement.querySelectorAll(settings.inputSelector)
    );
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        this.checkInputValidity(formElement, inputElement, settings);
        this.toggleButtonState(inputList, settings, formElement);
      });
      inputElement.addEventListener("focus", function () {
        this.checkInputValidity(formElement, inputElement, settings);
        this.toggleButtonState(inputList, settings, formElement);
      });
    });
  }

  enableValidation() {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    this.setEventListeners(this.formElement, this.settings);
  }
}
