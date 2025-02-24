class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector); // Selecciona el popup
    this._closeIcon = this._popup.querySelector(".form__close-button"); // Icono para cerrar el popup
    this._handleEscClose = this._handleEscClose.bind(this); // Enlaza el método al contexto de la clase
  }

  // Método para abrir el popup
  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose); // Escucha la tecla Esc
  }

  // Método para cerrar el popup
  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose); // Deja de escuchar la tecla Esc
  }

  // Método privado para manejar el cierre al presionar la tecla Esc
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
}
