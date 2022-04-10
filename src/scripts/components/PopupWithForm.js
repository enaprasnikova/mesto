import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, selectorButton, submitForm) {
    super(selector)
    this._submitForm = submitForm;
    this._form = this._popup.querySelector('.popup__input');
    this._inputs = this._form.querySelectorAll('.popup__input-text');
    this._nameForm = this._form.getAttribute('name');
    this._submitButton = this._form.querySelector(selectorButton);
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

  changeSubmit(newSubmit) {
    this._submitForm = newSubmit;
  }

  setEventListeners = () => {
    super.setEventListeners()
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());

      if(this._submitButton !== null) {
        this._submitButton.textContent = 'Сохранение...'
      }
    })
  }

  changeTextButton(){
    if(this._submitButton !== null){
      this._submitButton.textContent = 'Сохранить'
    }
  }
 
}