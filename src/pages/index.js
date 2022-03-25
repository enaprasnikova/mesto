import { initialCards, editButton, addButton, popUpFormAdd, inputNameElement, inputAboutMeElement, settings} from '../scripts/utils/constans.js';
import { Card } from '../scripts/components/Card.js';
import { FormValidator } from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';

import './index.css';

const formValidators = {}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    const formName = formElement.getAttribute('name')
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(settings);

//добавить новую информацию в профиль
function submitInfo(data) {
  userInfo.setUserInfo(data)
  popupFormProfile.close();
}

//открыть попап с редактированием профиля
function openPopUpProfile() {
  formValidators[popupFormProfile.getFormName()].resetValidation();
  popupFormProfile.open();
  const infoProfile = userInfo.getUserInfo();
  inputNameElement.value = infoProfile.name;
  inputAboutMeElement.value = infoProfile.info;
  formValidators[popupFormProfile.getFormName()].enableButton();
}

const addCard = (data) => {
  const templateClone = createCard(data, popupWithImage.open.bind(popupWithImage))
  cardSection.addItem(templateClone);
  popupFormAddCard.close();
  formValidators[popUpFormAdd.getAttribute('name')].disableButton();
}

const popupFormAddCard = new PopupWithForm('.popup_type_card', addCard)
popupFormAddCard.setEventListeners();

const popupFormProfile = new PopupWithForm('.popup_type_profile', submitInfo);
popupFormProfile.setEventListeners();

const userInfo = new UserInfo({name: '.profile__name', info: '.profile__about-me'})

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();

const cardSection = new Section({items: initialCards, renderer: (item) => {
  const templateClone = createCard(item, popupWithImage.open.bind(popupWithImage))
  cardSection.setItem(templateClone);
}}, '.element-list');
cardSection.renderItems();

function createCard(item, callback) {
  const card = new Card(item, '.template', callback);
  const templateClone = card.changeInitialCard();
  return templateClone
}

editButton.addEventListener('click', openPopUpProfile);

addButton.addEventListener('click', () => {
  formValidators[popupFormAddCard.getFormName()].resetValidation();
  popupFormAddCard.open()
});