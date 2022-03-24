export default class UserInfo {
  constructor(data) {
    this._selectorName = data.name;
    this._selectorInfo = data.info;
  }

  //возвращает объект с данными пользователя.
  getUserInfo() {
    this._nameElement = document.querySelector(this._selectorName);
    this._infoElement = document.querySelector(this._selectorInfo);
    return {info: this._infoElement.textContent, name: this._nameElement.textContent};
  }

  //принимает новые данные пользователя и добавляет их на страницу.
  setUserInfo(data) {
    this._nameElement.textContent = data.name;
    this._infoElement.textContent = data.info;
  }
}