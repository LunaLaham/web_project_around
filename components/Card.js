import PopupWithImage from "./PopupWithImage.js";

export default class Card {
  constructor(name, link, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this.cardImage = this._element.querySelector(".card__image");
    this.cardTitle = this._element.querySelector(".card__text-dos");
    this.deleteButton = this._element.querySelector(".card__trash");
    this.heartElement = this._element.querySelector(".card__heart");

    this.element = this._element.querySelector(".card");

    this.cardImage.src = this._link;
    this.cardImage.alt = this._name;
    this.cardTitle.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    //imagePreview.addEventListener("click", () => {
    // imagePopup.open();
    // });

    this.cardImage.addEventListener("click", () => {
      this._handleImageClick();
    });
    this.deleteButton.addEventListener("click", (e) => this.deleteCard());
    this.heartElement.addEventListener("click", (e) => this.toggleLike());
  }

  _handleImageClick() {
    const imagePopup = new PopupWithImage(".imagepopup");
    imagePopup.open(this._link, this._name);
    console.log(`Image clicked: ${this._name}`);
    // imagePopup.classList.add("popup__disable");
    //imagePreview.src = this._link;
    //imagePreview.alt = this._name;
  }
  deleteCard() {
    this.element.remove();
  }
  toggleLike() {
    const heartElement = this.heartElement;
    if (heartElement.src.includes("/images/Group.svg"))
      heartElement.src = "./images/Union.png";
    else heartElement.src = "./images/Group.svg";
  }
}

export function createCard(item) {
  const card = new Card(item.name, item.link, ".template-card");
  return card.generateCard();
}

// document.querySelector(".card-list__items").append(cardElement);
//  });

//return  this.card;
//}
//}

//  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",//

//export default Card
