(()=>{"use strict";var e={},t=document.querySelector(".profile__edit-button"),n=document.querySelector(".profile__add-button"),o=document.querySelector(".popup__input-text_new_name"),r=document.querySelector(".popup__input-text_new_info"),i=document.querySelector(".profile__avatar"),a=document.querySelector(".profile__avatar_type_button"),u={formSelector:".popup__input",inputSelector:".popup__input-text",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_inactive",inputErrorClass:"popup__input-text_error",popupSelector:".popup"};function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}document.querySelector(".popup_type_image");var l=function(){function e(t,n,o,r,i,a){var u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"_openPopUpImage",(function(){u._handleCardClick(u._name,u._link)})),c(this,"_deleteLikeImage",(function(){u._elementLikeButton.classList.remove("element__like-button_active")})),this._name=t.name,this._link=t.link,this._likes=t.likes,this._id=t._id,this._userId=i,this._ownerId=t.owner._id,this._cardTemplateSelector=n,this._handleCardClick=o,this._handleDeleteClick=r,this._handleLikeClick=a}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._elementLikeButton=this._templateClone.querySelector(".element__like-button"),this._elementDeleteButton=this._templateClone.querySelector(".element__delete-button"),this._elementPhoto=this._templateClone.querySelector(".element__photo"),this._elementPhoto.addEventListener("click",this._openPopUpImage),this._elementLikeButton.addEventListener("click",(function(){return e._handleLikeClick(e._id)})),this._elementDeleteButton.addEventListener("click",(function(){return e._handleDeleteClick(e._id)}))}},{key:"deleteCard",value:function(){this._templateClone.remove(),this._templateClone=null}},{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._likes=e,this._templateClone.querySelector(".element__like-count").textContent=this._likes.length,this.isLiked()?this._setLikeImage():this._deleteLikeImage()}},{key:"_setLikeImage",value:function(){this._elementLikeButton.classList.add("element__like-button_active")}},{key:"changeInitialCard",value:function(){return this._templateClone=this._getTemplate(),this._setEventListeners(),this._elementPhoto.setAttribute("src",this._link),this._elementPhoto.setAttribute("alt",this._name),this._templateClone.querySelector(".element__photo-name").textContent=this._name,this.setLikes(this._likes),this._userId!==this._ownerId&&(this._elementDeleteButton.style.display="none"),this._templateClone}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var p=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._settings=t,this._form=n,this._formInputs=this._form.querySelectorAll(this._settings.inputSelector),this._button=this._form.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_hideInputError",value:function(e,t){e.classList.remove(this._settings.inputErrorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.validity.valid?this._hideInputError(e,t):(e.classList.add(this._settings.inputErrorClass),t.textContent=e.validationMessage)}},{key:"enableValidation",value:function(){var e=this;this._formInputs.forEach((function(t){t.addEventListener("input",(function(n){e._checkInputValidity(t),e._checkFormValidity()}))}))}},{key:"_checkFormValidity",value:function(){this._form.checkValidity()?this.enableButton():this.disableButton()}},{key:"disableButton",value:function(){this._button.classList.add(this._settings.inactiveButtonClass),this._button.setAttribute("disabled",!0)}},{key:"enableButton",value:function(){this._button.removeAttribute("disabled"),this._button.classList.remove(this._settings.inactiveButtonClass)}},{key:"resetValidation",value:function(){var e=this;this._form.reset(),this._formInputs.forEach((function(t){var n=e._form.querySelector(".".concat(t.id,"-error"));e._hideInputError(t,n)}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var _=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(t)}var t,n;return t=e,(n=[{key:"setItem",value:function(e){this._container.append(e)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var d=function(){function e(t){var n,o,r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(e){"Escape"===e.key&&r.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[n]=o,this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close-button").addEventListener("click",this.close.bind(this)),this._popup.addEventListener("mousedown",(function(t){t.target.closest(".container")||e.close()}))}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=k(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},v.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function w(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(o);if(r){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._cardImage=t._popup.querySelector(".popup__card_img"),t._cardName=t._popup.querySelector(".popup__card_name"),t}return t=a,(n=[{key:"open",value:function(e,t){v(E(a.prototype),"open",this).call(this),this._cardImage.setAttribute("src",t),this._cardImage.setAttribute("alt",e),this._cardName.textContent=e}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(d);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function L(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function P(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return j(e)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=q(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},I.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(o);if(r){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function a(e,t,n){var o,r,u,s,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),c=function(){I((o=j(r),B(a.prototype)),"setEventListeners",o).call(o),r._form.addEventListener("submit",(function(e){e.preventDefault(),r._submitForm(r._getInputValues()),null!==r._submitButton&&(r._submitButton.textContent="Сохранение...")}))},(s="setEventListeners")in(u=j(r=i.call(this,e)))?Object.defineProperty(u,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):u[s]=c,r._submitForm=n,r._form=r._popup.querySelector(".popup__input"),r._inputs=r._form.querySelectorAll(".popup__input-text"),r._nameForm=r._form.getAttribute("name"),r._submitButton=r._form.querySelector(t),r}return t=a,(n=[{key:"getFormName",value:function(){return this._nameForm}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputs.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"changeSubmit",value:function(e){this._submitForm=e}},{key:"close",value:function(){I(B(a.prototype),"close",this).call(this),null!==this._submitButton&&(this._submitButton.textContent="Сохранить")}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(d);function T(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var x=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selectorName=t.name,this._selectorInfo=t.info,this._selectorAvatar=t.avatar,this._nameElement=document.querySelector(this._selectorName),this._infoElement=document.querySelector(this._selectorInfo),this._avatarElement=document.querySelector(this._selectorAvatar)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{info:this._infoElement.textContent,name:this._nameElement.textContent,avatar:this._avatarElement.getAttribute("src")}}},{key:"setUserInfo",value:function(e){this._nameElement.textContent=e.name,this._infoElement.textContent=e.info,this._avatarElement.setAttribute("src",e.avatar)}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function A(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var U,N=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._options=t}var t,n;return t=e,n=[{key:"_makeRequest",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(e,t).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"getInitialCards",value:function(){return this._makeRequest("".concat(this._options.baseUrl,"/cards"),{headers:this._options.headers})}},{key:"getUserInfo",value:function(){return this._makeRequest("".concat(this._options.baseUrl,"/users/me"),{headers:this._options.headers})}},{key:"editProfile",value:function(e,t){return this._makeRequest("".concat(this._options.baseUrl,"/users/me"),{method:"PATCH",headers:this._options.headers,body:JSON.stringify({name:e,about:t})})}},{key:"addCard",value:function(e,t){return this._makeRequest("".concat(this._options.baseUrl,"/cards"),{method:"POST",headers:this._options.headers,body:JSON.stringify({name:e,link:t})})}},{key:"deleteCard",value:function(e){return this._makeRequest("".concat(this._options.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._options.headers})}},{key:"deleteLike",value:function(e){return this._makeRequest("".concat(this._options.baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._options.headers})}},{key:"addLike",value:function(e){return this._makeRequest("".concat(this._options.baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._options.headers})}},{key:"changeAvatar",value:function(e){return this._makeRequest("".concat(this._options.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._options.headers,body:JSON.stringify(e)})}}],n&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-39",headers:{authorization:"cddcd137-fbb7-43b3-abeb-f608589b305e","Content-Type":"application/json"}});U=u,Array.from(document.querySelectorAll(U.formSelector)).forEach((function(t){var n=new p(U,t),o=t.getAttribute("name");e[o]=n,n.enableValidation()}));var V=new R(".popup_type_card",u.submitButtonSelector,(function(t){N.addCard(t.name,t.link).then((function(t){var n=Q(t,z.open.bind(z),J);K.addItem(n),V.close(),e[V.getFormName()].disableButton()}))}));V.setEventListeners();var F=new R(".popup_type_profile",u.submitButtonSelector,(function(e){N.editProfile(e.name,e.info).then((function(e){M.setUserInfo({name:e.name,info:e.about,avatar:e.avatar}),F.close()}))}));F.setEventListeners();var D=new R(".popup_type_avatar",u.submitButtonSelector,(function(e){N.changeAvatar(e).then((function(e){M.setUserInfo({name:e.name,info:e.about,avatar:e.avatar}),D.close()}))}));D.setEventListeners();var H=new R(".popup_type_delete");H.setEventListeners();var J,M=new x({name:".profile__name",info:".profile__about-me",avatar:".profile__avatar_type_photo"}),z=new S(".popup_type_image");z.setEventListeners();var G=N.getUserInfo().then((function(e){M.setUserInfo({name:e.name,info:e.about,avatar:e.avatar}),J=e._id})),K=new _(".element-list");function Q(e,t,n){var o=new l(e,".template",t,(function(e){H.open(),H.changeSubmit((function(){N.deleteCard(e).then((function(e){o.deleteCard(),H.close()}))}))}),n,(function(e){o.isLiked()?N.deleteLike(e).then((function(e){o.setLikes(e.likes)})):N.addLike(e).then((function(e){o.setLikes(e.likes)}))}));return o.changeInitialCard()}Promise.all([G]).then((function(){N.getInitialCards().then((function(e){e.forEach((function(e){var t=Q(e,z.open.bind(z),J);K.setItem(t)}))}))})),t.addEventListener("click",(function(){e[F.getFormName()].resetValidation(),F.open();var t=M.getUserInfo();o.value=t.name,r.value=t.info,e[F.getFormName()].enableButton()})),n.addEventListener("click",(function(){e[V.getFormName()].resetValidation(),e[V.getFormName()].disableButton(),V.open()})),i.addEventListener("mouseover",(function(){a.style.visibility="visible"})),i.addEventListener("mouseout",(function(){a.style.visibility="hidden"})),a.addEventListener("click",(function(){e[D.getFormName()].resetValidation(),e[D.getFormName()].disableButton(),D.open()}))})();