import Popup from "./popup.js";
class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector(".popup__form");
    this._inputList = this._popup.querySelectorAll(".popup__input");
    this._handleFormSubmit = handleFormSubmit;
  }
  close() {
    super.close();
  }
  open() {
    super.open();
  }
  _getInputValues() {
    const FormValues = {};
    this._inputList.forEach((input) => {
      FormValues[input.name] = input.value;
      console.log(FormValues);
    });
    return FormValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", () => {
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }
}

export default PopupWithForm;
