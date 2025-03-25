
import Popup from "./popup.js";
class PopupWithImage extends Popup{
        constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popupElement.querySelector('.popup__image'); 
        this.

        }
        close() {
        super.open();
 }
        open(imageSrc, imageAlt) {
        this._image.src = imageSrc;
        this._image.alt = imageAlt;

        super.open();

}

//trabaje en popupwithimage hice open 