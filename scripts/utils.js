import {ESC_CODE} from './constans.js';

export function openPopUp(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown',  closeByEsc)
}

export function closeByEsc(evt) {
  if (evt.key === ESC_CODE) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopUp(openedPopup); 
  }
}

export function closePopUp(popup) {
  popup.classList.remove('popup_opened')
  document.removeEventListener('keydown',  closeByEsc)
  clearInput(popup)
}

function clearInput(popup) {
  const form = popup.querySelector('.popup__input');
  if (form) {
    form.reset();
      const inputs = form.querySelectorAll('.popup__input-text');
      const spans = form.querySelectorAll('.input-box__error');
    inputs.forEach((input) => {
      input.classList.remove('popup__input-text_error');
    })
    spans.forEach((span) => {
      span.textContent = '';
    })

  }
}