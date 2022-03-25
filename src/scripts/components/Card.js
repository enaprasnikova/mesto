export class Card {
  constructor(data, cardTemplateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const templateClone = document
    .querySelector(this._cardTemplateSelector)
    .content
    .cloneNode(true);
    return templateClone;
  }

  _setEventListeners() {
    this._elementLikeButton = this._templateClone.querySelector('.element__like-button');
    this._elementDeleteButton =  this._templateClone.querySelector('.element__delete-button');
    this._elementPhoto = this._templateClone.querySelector('.element__photo');

    this._elementPhoto.addEventListener('click', this._openPopUpImage); //открыть попап
    this._elementLikeButton.addEventListener('click', this._setLikeImage);  //поставить лайки
    this._elementDeleteButton.addEventListener('click', this._deleteCard); //удалить карточку
  }

  _openPopUpImage = () => {
    this._handleCardClick(this._name, this._link)
  }

  _setLikeImage = () => {
    this._elementLikeButton.classList.toggle('element__like-button_active');
  };

  _deleteCard = (evt) => {
    evt.target.closest('.element').remove();
  }

  changeInitialCard() {
    this._templateClone = this._getTemplate(); //скопировать содержимое 
    this._setEventListeners();
    this._elementPhoto.setAttribute('src', this._link); //добавить картинки
    this._elementPhoto.setAttribute('alt', this._name);
    this._templateClone.querySelector('.element__photo-name').textContent = this._name; //добавить подпись к фото
    return this._templateClone;
}

}