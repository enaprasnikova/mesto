export class Card {
  constructor(data, cardTemplateSelector, handleCardClick, handleDeleteClick, userId, handleLikeClick) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._userId = userId;
    this._ownerId = data.owner._id;

    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick
  }

  _getTemplate() {
    const templateClone = document
    .querySelector(this._cardTemplateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);
    return templateClone;
  }

  _setEventListeners() {
    this._elementLikeButton = this._templateClone.querySelector('.element__like-button');
    this._elementDeleteButton =  this._templateClone.querySelector('.element__delete-button');
    this._elementPhoto = this._templateClone.querySelector('.element__photo');
    this._elementPhoto.addEventListener('click', this._openPopUpImage); //открыть попап
    this._elementLikeButton.addEventListener('click', () => this._handleLikeClick(this._id));
    this._elementDeleteButton.addEventListener('click',  () => this._handleDeleteClick(this._id)); //удалить карточку
  }

  _openPopUpImage = () => {
    this._handleCardClick(this._name, this._link)
  }

  deleteCard() {
    this._templateClone.remove()
    this._templateClone = null
  }

  isLiked() {
    const userHasLikedCard = this._likes.find(user => user._id === this._userId)
    return userHasLikedCard
  }

  setLikes(newLikes) {
    this._likes = newLikes;
    const likeCountElement = this._templateClone.querySelector('.element__like-count');
    likeCountElement.textContent = this._likes.length;
    
    if(this.isLiked()){
      this._setLikeImage()
    } else {
      this._deleteLikeImage()
    }
  }

  _setLikeImage() {
    this._elementLikeButton.classList.add('element__like-button_active');
  }

  _deleteLikeImage = () => {
    this._elementLikeButton.classList.remove('element__like-button_active');
  };

  changeInitialCard() {
    this._templateClone = this._getTemplate(); //скопировать содержимое 
    this._setEventListeners();
    this._elementPhoto.setAttribute('src', this._link); //добавить картинки
    this._elementPhoto.setAttribute('alt', this._name);
    this._templateClone.querySelector('.element__photo-name').textContent = this._name; //добавить подпись к фото

    this.setLikes(this._likes)
    if(this._userId !== this._ownerId) {
      this._elementDeleteButton.style.display = 'none'
    }

    return this._templateClone;    
  }

}