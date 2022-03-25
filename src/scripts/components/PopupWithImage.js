import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._cardImage = this._popup.querySelector('.popup__card_img');
    this._cardName = this._popup.querySelector('.popup__card_name');
  }

  open(name, link) {
    super.open()
    this._cardImage.setAttribute('src', link);
    this._cardImage.setAttribute('alt', name);
    this._cardName.textContent = name;
  }
}