import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, submitForm) {
    super(selector)
    this._submitForm = submitForm;
    this._form = this._popup.querySelector('.popup__input');
  }

  _getInputValues() {
    const inputs = this._form.querySelectorAll('.popup__input-text');
    this._formValues = {};
    inputs.forEach((input) => {
      this._formValues[input.name] = input.value;
    })
    
    return this._formValues;
  }

  setEventListeners = () => {
    super.setEventListeners()
    this._form.addEventListener('submit', this._submitForm);
  }

  close() {
    super.close();
    this._form.reset();
    const inputs = this._form.querySelectorAll('.popup__input-text');
    const spans = this._form.querySelectorAll('.input-box__error');
    inputs.forEach((input) => {
      input.classList.remove('popup__input-text_error');
    })
    spans.forEach((span) => {
      span.textContent = '';
    })
  }
}