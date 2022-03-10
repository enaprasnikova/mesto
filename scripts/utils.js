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
}