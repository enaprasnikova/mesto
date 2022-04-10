import Popup from "./Popup.js";

export default class PopupWithoutForm extends Popup {
  constructor(selector) {
    super(selector);
    this._form = this._popup.querySelector('.popup__input');
  }

  changeSubmit(newSubmit) {
    this._submitForm = newSubmit;
  }

  setEventListeners = () => {
    super.setEventListeners()
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm();
    })
  }

}