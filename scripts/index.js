const ESC_CODE = 'Escape';

const elementList = document.querySelector('.element-list');

const templateCardsContent = document.querySelector('.template').content;

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

const popUpImage = document.querySelector('.popup_type_image');


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
}

function closePopUp(popup) {
  popup.classList.remove('popup_opened')
  document.removeEventListener('keydown',  closeByEsc)
}

function openPopUp(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown',  closeByEsc)
}

function closeByEsc(evt) {
  if (evt.key === ESC_CODE) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopUp(openedPopup); 
  }
} 

//открыть попап с фотографией 
function openPopUpImage(evt) {
  openPopUp(popUpImage);
  const element = evt.target.closest('.element');
  popUpImage.querySelector('.popup__card_img').setAttribute('src', element.querySelector('.element__photo').getAttribute('src'))
  popUpImage.querySelector('.popup__card_img').setAttribute('alt', element.querySelector('.element__photo-name').textContent)
  popUpImage.querySelector('.popup__card_name').textContent = element.querySelector('.element__photo-name').textContent;
  
}

initialCards.forEach(function(item) {
  const templateClone = changeInitialCard(item);
  elementList.append(templateClone); //добавить в конец родильского блока
})

function addCard(evt) {
  evt.preventDefault();
  const inputCardTitle = document.querySelector('.popup__input-text_new_title');
  const inputCardLink = document.querySelector('.popup__input-text_new_link');
  const templateClone = changeInitialCard({name: inputCardTitle.value, link: inputCardLink.value});
  elementList.prepend(templateClone); //добавить в начало родильского блока 
  closePopUp(popUpCard);
  inputCardTitle.value = '';
  inputCardLink.value = '';
  const addImageButton = evt.target.querySelector('.popup__submit-button');
  addImageButton.classList.add('popup__submit-button_inactive');
  addImageButton.setAttribute('disabled', true);
}

function changeInitialCard(item) {
    const templateClone = templateCardsContent.cloneNode(true); //скопировать содержимое 
    templateClone.querySelector('.element__photo').setAttribute('src', item.link); //добавить картинки
    templateClone.querySelector('.element__photo').setAttribute('alt', item.name);
    templateClone.querySelector('.element__photo-name').textContent = item.name; //добавить подпись к фото
    templateClone.querySelector('.element__photo').addEventListener('click', openPopUpImage); //открыть попап
    templateClone.querySelector('.element__like-button').addEventListener('click', setLikeImage);  //поставить лайки
    templateClone.querySelector('.element__delete-button').addEventListener('click', deleteCard); //удалить карточку
    return templateClone;
}

// добавить слушатель для лайка
function setLikeImage(evt) {
  evt.target.classList.toggle('element__like-button_active');
}

//удалить карточку
function deleteCard(evt) {
  evt.target.closest('.element').remove();
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