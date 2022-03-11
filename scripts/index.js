import {openPopUp, closePopUp} from './utils.js';
import {popUpImage, initialCards} from './constans.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const elementList = document.querySelector('.element-list');

const editButton = document.querySelector('.profile__edit-button');

const closeButtonProfile = document.querySelector('.popup__close-button_profile');

const popUpFormProfile = document.querySelector('.popup__input_profile');

const addButton = document.querySelector('.profile__add-button');

const closeButtonAdd = document.querySelector('.popup__close-button_card');

const closeButtonImage = document.querySelector('.popup__close-button_image');

const popUpFormAdd = document.querySelector('.popup__input_card');

const inputNameElement = document.querySelector('.popup__input-text_new_name');

const inputAboutMeElement = document.querySelector('.popup__input-text_new_info');

const profileNameElement = document.querySelector('.profile__name');

const profileAboutMeElement = document.querySelector('.profile__about-me');

const popUpProfile = document.querySelector('.popup_type_profile');

const popUpCard = document.querySelector('.popup_type_card');

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
  profileNameElement.textContent = inputNameElement.value;
  profileAboutMeElement.textContent = inputAboutMeElement.value;
  closePopUp(popUpProfile);
}

//открыть попап с редактированием профиля
function openPopUpProfile() {
  openPopUp(popUpProfile);
  const profileName = profileNameElement.textContent;
  const profileAboutMe = profileAboutMeElement.textContent;
  inputNameElement.value = profileName;
  inputAboutMeElement.value = profileAboutMe;
  const submitButton = popUpProfile.querySelector(settings.submitButtonSelector)
  submitButton.removeAttribute('disabled');
  submitButton.classList.remove(settings.inactiveButtonClass);
}

initialCards.forEach(function(data) {
  const card = new Card(data, '.template');
  const templateClone = card.changeInitialCard();
  elementList.append(templateClone); //добавить в конец родильского блока
})

function addCard(evt) {
  evt.preventDefault();
  const inputCardTitle = document.querySelector('.popup__input-text_new_title');
  const inputCardLink = document.querySelector('.popup__input-text_new_link');
  const card = new Card({name: inputCardTitle.value, link: inputCardLink.value}, '.template');
  const templateClone = card.changeInitialCard();
  elementList.prepend(templateClone); //добавить в начало родильского блока 
  closePopUp(popUpCard);
  popUpFormAdd.reset(); //очистить поля формы 
  validatorFormAdd.disableButton();
}

function closePopupOverlay() {
  const closeOverlay = document.querySelectorAll('.popup')
  closeOverlay.forEach(overlay => {
    overlay.addEventListener('mousedown', function (event) {
      if (!event.target.closest('.container')) {
       closePopUp(overlay)
      }
    });
  })
}

closePopupOverlay()

editButton.addEventListener('click', openPopUpProfile);

closeButtonProfile.addEventListener('click', function(){closePopUp(popUpProfile)});

popUpFormProfile.addEventListener('submit', submitInfo);

addButton.addEventListener('click', function(){openPopUp(popUpCard)});

closeButtonAdd.addEventListener('click', function(){closePopUp(popUpCard)});

closeButtonImage.addEventListener('click', function(){closePopUp(popUpImage)});

popUpFormAdd.addEventListener('submit', addCard);