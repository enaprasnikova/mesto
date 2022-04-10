import { editButton, addButton, inputNameElement, inputAboutMeElement, settings, avatarContainer, buttonEditAvatar, formValidators} from '../scripts/utils/constans.js';
import { Card } from '../scripts/components/Card.js';
import { FormValidator } from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import { api } from '../scripts/components/Api.js'

import './index.css';

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
  api.editProfile(data.name, data.info)
    .then(res => {
      userInfo.setUserInfo({name: res.name, info: res.about, avatar: res.avatar})
      popupFormProfile.close();
    })
    .catch(error => console.log(error))
    .finally(() => popupFormProfile.changeTextButton())
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
  api.addCard(data.name, data.link)
    .then(res => {
      const templateClone = createCard(res, popupWithImage.open.bind(popupWithImage), userId)
      cardSection.addItem(templateClone);
      popupFormAddCard.close();
      formValidators[popupFormAddCard.getFormName()].disableButton();
    })
    .catch(error => console.log(error))
    .finally(() => popupFormAddCard.changeTextButton())
}

function addNewAvatar(data) {
  api.changeAvatar(data)
    .then(res => {
      userInfo.setUserInfo({name: res.name, info: res.about, avatar: res.avatar});
      popupFormAvatar.close()
    })
    .catch(error => console.log(error))
    .finally(() => popupFormAvatar.changeTextButton())
}

const popupFormAddCard = new PopupWithForm('.popup_type_card', settings.submitButtonSelector, addCard)
popupFormAddCard.setEventListeners();

const popupFormProfile = new PopupWithForm('.popup_type_profile', settings.submitButtonSelector, submitInfo);
popupFormProfile.setEventListeners();

const popupFormAvatar = new PopupWithForm('.popup_type_avatar', settings.submitButtonSelector, addNewAvatar);
popupFormAvatar.setEventListeners();

const popupDeleteCard = new PopupWithForm('.popup_type_delete');
popupDeleteCard.setEventListeners();

const userInfo = new UserInfo({name: '.profile__name', info: '.profile__about-me', avatar: '.profile__avatar_type_photo'});

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();


let userId

const getUserInfo = api.getUserInfo()
  .then(res => {
    userInfo.setUserInfo({name: res.name, info: res.about, avatar: res.avatar})
    userId = res._id
  })
  .catch(error => console.log(error))

const cardSection = new Section('.element-list');
Promise.all([getUserInfo])
  .then(() => {
    api.getInitialCards()
    .then(cardList => {
      cardList.forEach(item => {
        const templateClone = createCard(item, popupWithImage.open.bind(popupWithImage), userId)
        cardSection.setItem(templateClone);
      })
    })
    .catch(error => console.log(error))
  })

function createCard(item, callback, userId) {
  const card = new Card(
    item,
    '.template',
    callback, 
    (id) => {
    popupDeleteCard.open()
    popupDeleteCard.changeSubmit(() => {
      
      api.deleteCard(id)
        .then(res => {
          card.deleteCard()
          popupDeleteCard.close()
        })
        .catch(error => console.log(error))
    })
  }, 
    userId,
    (id) => {
      if (card.isLiked()) {
        api.deleteLike(id)
          .then(res => {
            card.setLikes(res.likes)
          })
          .catch(error => console.log(error))
      } else {
        api.addLike(id)
          .then(res => {
            card.setLikes(res.likes)
          })
          .catch(error => console.log(error))
      }
    }
  );
  const templateClone = card.changeInitialCard();
  return templateClone
}

editButton.addEventListener('click', openPopUpProfile);

addButton.addEventListener('click', () => {
  formValidators[popupFormAddCard.getFormName()].resetValidation();
  formValidators[popupFormAddCard.getFormName()].disableButton();
  popupFormAddCard.open()
});

avatarContainer.addEventListener('mouseover', () => {
  buttonEditAvatar.style.visibility = 'visible'
})

avatarContainer.addEventListener('mouseout', () => {
  buttonEditAvatar.style.visibility = 'hidden'
})

buttonEditAvatar.addEventListener('click', () =>{
  formValidators[popupFormAvatar.getFormName()].resetValidation();
  formValidators[popupFormAvatar.getFormName()].disableButton();
  popupFormAvatar.open()
})