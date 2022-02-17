enableValidation({
  formSelector: '.popup__input',
  inputSelector: '.popup__input-text',
  submitButtonSelector:'.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__input-text_error',
  popupSelector: '.popup'
}); 

function enableValidation(param) {
  const formInputs = document.querySelectorAll(param.inputSelector);
  formInputs.forEach(input => {
    const form = input.closest(param.formSelector);
    input.addEventListener('input', (event) => {
      checkInputValidity(input, param);
      checkFormValidity(form, param);
    })
  })
}

function checkInputValidity(input, param) {
  const formError = document.querySelector(`.${input.id}-error`)
  if (!input.validity.valid) {
    input.classList.add(param.inputErrorClass);
    formError.textContent = input.validationMessage;
  } else {
    input.classList.remove(param.inputErrorClass);
    formError.textContent = '';
  }
}

function checkFormValidity(form, param) {
  const button = form.querySelector(param.submitButtonSelector)
  if (!form.checkValidity()) {
    button.classList.add(param.inactiveButtonClass);
    button.setAttribute('disabled', true)
  } else {
    button.classList.remove(param.inactiveButtonClass);
    button.removeAttribute('disabled')
  }
}