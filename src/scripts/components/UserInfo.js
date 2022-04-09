export default class UserInfo {
  constructor(data) {
    this._selectorName = data.name;
    this._selectorInfo = data.info;
    this._selectorAvatar = data.avatar;
    this._nameElement = document.querySelector(this._selectorName);
    this._infoElement = document.querySelector(this._selectorInfo);
    this._avatarElement = document.querySelector(this._selectorAvatar)
  }

  //возвращает объект с данными пользователя.
  getUserInfo() {
    return {info: this._infoElement.textContent, name: this._nameElement.textContent, avatar: this._avatarElement.getAttribute('src')};
  }

  //принимает новые данные пользователя и добавляет их на страницу.
  setUserInfo(data) {
    this._nameElement.textContent = data.name;
    this._infoElement.textContent = data.info;
    this._avatarElement.setAttribute('src', data.avatar);
  }
}