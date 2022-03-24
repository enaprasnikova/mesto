import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

  open(name, link) {
    super.open()
    this._popup.querySelector('.popup__card_img').setAttribute('src', link);
    this._popup.querySelector('.popup__card_img').setAttribute('alt', name);
    this._popup.querySelector('.popup__card_name').textContent = name;
  }
}