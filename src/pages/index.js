import { initialCards} from '../scripts/utils/constans.js';
import { Card } from '../scripts/components/Card.js';
import { FormValidator } from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';

import './index.css';

const editButton = document.querySelector('.profile__edit-button');

const popUpFormProfile = document.querySelector('.popup__input_profile');

const addButton = document.querySelector('.profile__add-button');

const popUpFormAdd = document.querySelector('.popup__input_card');

const inputNameElement = document.querySelector('.popup__input-text_new_name');

const inputAboutMeElement = document.querySelector('.popup__input-text_new_info');

const popUpProfile = document.querySelector('.popup_type_profile');

const settings = {
  formSelector: '.popup__input',
  inputSelector: '.popup__input-text',
  submitButtonSelector:'.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',

  inputErrorClass: 'popup__input-text_error',
  popupSelector: '.popup'
};

const validatorFormAdd = new FormValidator(settings, popUpFormAdd);
const validatorFormEdit = new FormValidator(settings, popUpFormProfile);
validatorFormAdd.enableValidation();
validatorFormEdit.enableValidation();

//добавить новую информацию в профиль
function submitInfo(evt) {
  evt.preventDefault();
  userInfo.setUserInfo({name: inputNameElement.value, info: inputAboutMeElement.value})
  popupFormProfile.close();
}

//открыть попап с редактированием профиля
function openPopUpProfile() {
  popupFormProfile.open();
  const infoProfile = userInfo.getUserInfo();
  inputNameElement.value = infoProfile.name;
  inputAboutMeElement.value = infoProfile.info;
  const submitButton = popUpProfile.querySelector(settings.submitButtonSelector)
  submitButton.removeAttribute('disabled');
  submitButton.classList.remove(settings.inactiveButtonClass);
}

const addCard = (evt) => {
  evt.preventDefault();
  const inputCardTitle = document.querySelector('.popup__input-text_new_title');
  const inputCardLink = document.querySelector('.popup__input-text_new_link');
  const card = new Card({name: inputCardTitle.value, link: inputCardLink.value}, '.template', popupWithImage.open.bind(popupWithImage));
  const templateClone = card.changeInitialCard();
  cardSection.addItem(templateClone);
  popupFormAddCard.close();
  popUpFormAdd.reset(); //очистить поля формы 
  validatorFormAdd.disableButton();
}

const popupFormAddCard = new PopupWithForm('.popup_type_card', addCard)
popupFormAddCard.setEventListeners();

const popupFormProfile = new PopupWithForm('.popup_type_profile', submitInfo);
popupFormProfile.setEventListeners();

const userInfo = new UserInfo({name: '.profile__name', info: '.profile__about-me'})

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

const cardSection = new Section({items: initialCards, renderer: (item) => {
  const card = new Card(item, '.template', popupWithImage.open.bind(popupWithImage));
  const templateClone = card.changeInitialCard();
  cardSection.setItem(templateClone); //добавить в конец родильского блока
}}, '.element-list');
cardSection.renderItems();

editButton.addEventListener('click', openPopUpProfile);

popUpFormProfile.addEventListener('submit', submitInfo);

addButton.addEventListener('click', popupFormAddCard.open.bind(popupFormAddCard));