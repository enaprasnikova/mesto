let editButton = document.querySelector('.profile__edit-button');
editButton.addEventListener('click', openPopUp);

let closeButton = document.querySelector('.popup__close-button');
closeButton.addEventListener('click', closePopUp);

let popUpForm = document.querySelector('.popup__input');
popUpForm.addEventListener('submit', submitInfo);

function submitInfo(evt) {
  evt.preventDefault();
  let inputNameElement = document.querySelector('.popup__input-text_new_name');
  let inputAboutMeElement = document.querySelector('.popup__input-text_new_info');
  let profileNameElement = document.querySelector('.profile__name');
  let profileAboutMeElement = document.querySelector('.profile__about-me');
  profileNameElement.textContent = inputNameElement.value;
  profileAboutMeElement.textContent = inputAboutMeElement.value;
  closePopUp();
}

function openPopUp() {
  let popUp = document.querySelector('.popup');
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

function closePopUp() {
  let popUp = document.querySelector('.popup');
  popUp.classList.remove('popup_opened');
}