export class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = form;
  }

  _checkInputValidity(input) {
    const formError = document.querySelector(`.${input.id}-error`)
    if (!input.validity.valid) {
      input.classList.add(this._settings.inputErrorClass);
      formError.textContent = input.validationMessage;
    } else {
      input.classList.remove(this._settings.inputErrorClass);
      formError.textContent = '';
    }
  }

   enableValidation() {
    const formInputs = this._form.querySelectorAll(this._settings.inputSelector);
    formInputs.forEach(input => {
      input.addEventListener('input', (event) => {
        this._checkInputValidity(input);
        this._checkFormValidity();
      })
    })
  }

  _checkFormValidity() {
    const button = this._form.querySelector(this._settings.submitButtonSelector)
    if (!this._form.checkValidity()) {
      button.classList.add(this._settings.inactiveButtonClass);
      button.setAttribute('disabled', true)
    } else {
      button.classList.remove(this._settings.inactiveButtonClass);
      button.removeAttribute('disabled')
    }
  }
}