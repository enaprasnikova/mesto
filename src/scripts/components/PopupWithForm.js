import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, submitForm) {
    super(selector)
    this._submitForm = submitForm;
    this._form = this._popup.querySelector('.popup__input');
    this._inputs = this._form.querySelectorAll('.popup__input-text');
    this._nameForm = this._form.getAttribute('name');
  }

  getFormName() {
    return this._nameForm;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputs.forEach((input) => {
      this._formValues[input.name] = input.value;
    })
    
    return this._formValues;
  }

  setEventListeners = () => {
    super.setEventListeners()
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
    })
  }
 
}