export default class Section {
  //items — это массив данных, которые нужно добавить на страницу при инициализации класса.
  //renderer — это функция, которая отвечает за создание и отрисовку данных на странице.
  //containerSelector — селектор контейнера, в который нужно добавлять созданные элементы.
  constructor( { items, renderer }, containerSelector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  //отвечает за отрисовку всех элементов
  renderItems() {
    this.clear();
    this._initialArray.forEach( data => {
      this._renderer(data);
    })
  }

  setItem(element) {
    this._container.append(element);
  }

  clear() {
    this._container.innerHTML = '';
  }

  //принимает DOM-элемент и добавляет его в контейнер.
  addItem(element) {
    this._container.prepend(element);
  }

}