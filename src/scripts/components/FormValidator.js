export class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = form;
    this._formInputs = this._form.querySelectorAll(this._settings.inputSelector);
    this._button = this._form.querySelector(this._settings.submitButtonSelector);
  }

  _hideInputError(input, span) {
    input.classList.remove(this._settings.inputErrorClass);
    span.textContent = '';
  }

  _checkInputValidity(input) {
    const span = this._form.querySelector(`.${input.id}-error`)
    if (!input.validity.valid) {
      input.classList.add(this._settings.inputErrorClass);
      span.textContent = input.validationMessage;
    } else {
      this._hideInputError(input, span);
    }
  }

   enableValidation() {
     this._formInputs.forEach(input => {
      input.addEventListener('input', (event) => {
        this._checkInputValidity(input);
        this._checkFormValidity();
      })
    })
  }

  _checkFormValidity() {
    if (!this._form.checkValidity()) {
      this.disableButton()
    } else {
      this._button.classList.remove(this._settings.inactiveButtonClass);
      this._button.removeAttribute('disabled')
    }
  }

  disableButton() {
    this._button.classList.add(this._settings.inactiveButtonClass);
    this._button.setAttribute('disabled', true); 
  }

  enableButton() {
    this._button.removeAttribute('disabled');
    this._button.classList.remove(this._settings.inactiveButtonClass);
  }

  resetValidation() {
    this._form.reset();
    this._formInputs.forEach((input) => {
      const span = this._form.querySelector(`.${input.id}-error`)
      this._hideInputError(input, span);
    })
  }
  
}