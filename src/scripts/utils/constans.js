export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const editButton = document.querySelector('.profile__edit-button');

export const addButton = document.querySelector('.profile__add-button');

export const popUpFormAdd = document.querySelector('.popup__input_card');

export const inputNameElement = document.querySelector('.popup__input-text_new_name');

export const inputAboutMeElement = document.querySelector('.popup__input-text_new_info');

export const settings = {
  formSelector: '.popup__input',
  inputSelector: '.popup__input-text',
  submitButtonSelector:'.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',

  inputErrorClass: 'popup__input-text_error',
  popupSelector: '.popup'
};

export const ESC_CODE = 'Escape';

export const popUpImage = document.querySelector('.popup_type_image');