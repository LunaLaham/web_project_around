class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector); // Selecciona el popup
    this._closeIcon = this._popup.querySelector(".popup__close"); // Icono para cerrar el popup
    this._handleEscClose = this._handleEscClose.bind(this); // Enlaza el método al contexto de la clase
  }

  // Método para abrir el popup
  open() {
    this._popup.classList.add("popup_is-opened");
    document.addEventListener("keydown", this._handleEscClose); // Escucha la tecla Esc
  }

  // Método para cerrar el popup
  close() {
    console.log("click");
    this._popup.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", this._handleEscClose); // Deja de escuchar la tecla Esc
  }

  // Método privado para manejar el cierre al presionar la tecla Esc
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._closeIcon.addEventListener("click", () => this.close());
    // this._handleEscClose.addEventListener("click", () => this.close());
    document.addEventListener("keydown", (event) =>
      this._handleEscClose(event)
    );
  }
}

export default Popup;
