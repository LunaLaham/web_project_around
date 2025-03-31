
import Popup from "./popup.js";
class PopupWithImage extends Popup{
        constructor(popupSelector) {
        super(popupSelector);
        super.open();
        this._image = this._popupElement.querySelector('.popup__image'); 
        const image = this._image = this._image.querySelector('.imagePreview');
        image.src = imageSrc;
        image.alt = imageAlt;

        }
        close() {
       
 }
        open(imageSrc, imageAlt) {
        this._image.src = imageSrc;
        this._image.alt = imageAlt;

        

}


export default PopupWithImage;
//trabaje en popupwithimage hice open 