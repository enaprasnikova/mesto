import {ESC_CODE} from '../utils/constans.js';

export default class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose)
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown',  this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === ESC_CODE) {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.querySelector('.popup__close-button').addEventListener('click', this.close.bind(this));
    this._popup.addEventListener('mousedown', (event) => {
      if (!event.target.closest('.container')) {
       this.close()
      }
    });
  
  }
}