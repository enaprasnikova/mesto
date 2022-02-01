const initialCards = [
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

const elementList = document.querySelector('.element-list');

const templateContent = document.querySelector('.template').content;

const editButton = document.querySelector('.profile__edit-button');
editButton.addEventListener('click', openPopUpProfile);

const closeButton = document.querySelector('.popup__close-button_profile');
closeButton.addEventListener('click', closePopUpProfile);

const popUpForm = document.querySelector('.popup__input_profile');
popUpForm.addEventListener('submit', submitInfo);

const addButton = document.querySelector('.profile__add-button');
addButton.addEventListener('click', openPopUpCard);

const closeButtonAdd = document.querySelector('.popup__close-button_card');
closeButtonAdd.addEventListener('click', closePopUpCard);

const closeButtonImage = document.querySelector('.popup__close-button_image');
closeButtonImage.addEventListener('click', closePopUpImage);

const popUpFormAdd = document.querySelector('.popup__input_card');
popUpFormAdd.addEventListener('submit', addCard);


//добавить новую информацию в профиль
function submitInfo(evt) {
  evt.preventDefault();
  let inputNameElement = document.querySelector('.popup__input-text_new_name');
  let inputAboutMeElement = document.querySelector('.popup__input-text_new_info');
  let profileNameElement = document.querySelector('.profile__name');
  let profileAboutMeElement = document.querySelector('.profile__about-me');
  profileNameElement.textContent = inputNameElement.value;
  profileAboutMeElement.textContent = inputAboutMeElement.value;
  closePopUpProfile();
}

//открыть попап с редактированием профиля
function openPopUpProfile() {
  let popUp = document.querySelector('.popup_type_profile');
  popUp.classList.add('popup_opened');
  let profileNameElement = document.querySelector('.profile__name');
  let profileAboutMeElement = document.querySelector('.profile__about-me');
  let profileName = profileNameElement.textContent;
  let profileAboutMe = profileAboutMeElement.textContent;
  let inputName = popUp.querySelector('.popup__input-text_new_name');
  let inputAboutMe = popUp.querySelector('.popup__input-text_new_info');
  inputName.value = profileName;
  inputAboutMe.value = profileAboutMe; 
}

//закрыть попап с редактированием профиля 
function closePopUpProfile() {
  let popUp = document.querySelector('.popup_type_profile');
  popUp.classList.remove('popup_opened');
}

//открыть попап с добавлением карточек 
function openPopUpCard() {
  let popUp = document.querySelector('.popup_type_card');
  popUp.classList.add('popup_opened'); 
}

//закрыть попап с добавлением карточек 
function closePopUpCard() {
  let popUp = document.querySelector('.popup_type_card');
  popUp.classList.remove('popup_opened');
}

//закрыть попап с фотографией 
function closePopUpImage() {
  let popUp = document.querySelector('.popup_type_image');
  popUp.classList.remove('popup_opened');
}

//открыть попап с фотографией 
function openPopUpImage(evt) {
  let popUp = document.querySelector('.popup_type_image');
  popUp.classList.add('popup_opened'); 
  let element = evt.target.closest('.element');
  popUp.querySelector('.popup__card_img').setAttribute('src', element.querySelector('.element__photo').getAttribute('src'))
  popUp.querySelector('.popup__card_name').textContent = element.querySelector('.element__photo-name').textContent;
}


initialCards.forEach(function(item) {
  let templateClone = initialCard(item);
  elementList.append(templateClone); //добавить в начало родильского блока
})


function addCard(evt) {
  evt.preventDefault();
  let inputCardTitle = document.querySelector('.popup__input-text_new_title');
  let inputCardLink = document.querySelector('.popup__input-text_new_link');
  let templateClone = initialCard({name: inputCardTitle.value, link: inputCardLink.value});
  elementList.prepend(templateClone); //добавить в конец родильского блока
  closePopUpCard() 
}

function initialCard(item) {
    let templateClone = templateContent.cloneNode(true); //скопировать содержимое 
    templateClone.querySelector('.element__photo').setAttribute('src', item.link); //добавить картинки
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