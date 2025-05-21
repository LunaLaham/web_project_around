import Popup from "./popup.js";
class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._element = document.querySelector(popupSelector);
    this._image = this._element.querySelector(".imagePreview");
  }

  close() {
    super.close();
  }

  open(imageSrc, imageAlt) {
    this._image.src = imageSrc;
    this._image.alt = imageAlt;

    super.open();
  }
}

export default PopupWithImage;
