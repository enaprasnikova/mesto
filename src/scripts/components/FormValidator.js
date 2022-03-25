export class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = form;
    this._formInputs = this._form.querySelectorAll(this._settings.inputSelector);
    this._button = this._form.querySelector(this._settings.submitButtonSelector);
    this._spans = this._form.querySelectorAll('.input-box__error');
  }

  _checkInputValidity(input) {
    const formError = this._form.querySelector(`.${input.id}-error`)
    if (!input.validity.valid) {
      input.classList.add(this._settings.inputErrorClass);
      formError.textContent = input.validationMessage;
    } else {
      input.classList.remove(this._settings.inputErrorClass);
      formError.textContent = '';
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
      input.classList.remove('popup__input-text_error');
    })
    this._spans.forEach((span) => {
      span.textContent = '';
    })
  }
  
}