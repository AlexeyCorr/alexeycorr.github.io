!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(2),e.exports=n(1)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);const o=[{src:"img/certificates/html-css.jpg",description:"Профессиональный HTML и CSS, уровень 1"},{src:"img/certificates/js.jpg",description:"Профессиональный JavaScript,\n    уровень 1"},{src:"img/certificates/ecma.jpg",description:"Профессиональный HTML и CSS, уровень 1"}],r=(e="",t="div")=>{const n=document.createElement(t);return n.innerHTML=e.trim(),n.firstChild};class i{constructor(){if(new.target===i)throw new Error("Can't instantiate BaseComponent, only concrete one.");this._element=null,this._state={}}get template(){throw new Error("You have to define template.")}get element(){return null===this._element&&(this._element=this.render()),this._element}render(){return this._element=r(this.template),this.bind(),this._element}bind(){}unbind(){}unrender(){this.unbind(),this._element.remove(),this._element=null}}var s=i;const c=27;var l=class extends s{constructor(e){super(),this._src=e.src,this._desctiption=e.desctiption,this._onCloseButtonClick=this._onCloseButtonClick.bind(this),this._onCloseEscDown=this._onCloseEscDown.bind(this)}_removeElement(){this._element.remove(),this.unbind()}_onCloseButtonClick(e){e.preventDefault(),this._removeElement()}_onCloseEscDown(e){e.keyCode===c&&this._removeElement()}get template(){return`\n      <div class="popup">\n        <div class="popup__wrapper">\n          <div class="popup__pic-wrapper">\n            <img class="popup__pic" src="${this._src}" alt="сертификат ${this._desctiption}">\n          </div>\n          <button class="popup__close" aria-label="Закрыть попап" type="button"></button>\n        </div>\n      </div>`}bind(){this._element.querySelector(".popup__close").addEventListener("click",this._onCloseButtonClick),document.addEventListener("keydown",this._onCloseEscDown)}unbind(){this._element.querySelector(".popup__close").removeEventListener("click",this._onCloseButtonClick),document.removeEventListener("keydown",this._onCloseEscDown)}};const u=document.querySelector(".menu-toggle"),d=document.querySelector(".menu__wrapper");d.querySelectorAll(".menu__link").forEach(e=>{e.addEventListener("click",()=>{d.classList.contains("menu--opened")&&(u.classList.remove("menu-toggle--opened"),d.classList.remove("menu--opened"))})}),u.addEventListener("click",e=>{e.preventDefault(),u.classList.toggle("menu-toggle--opened"),d.classList.toggle("menu--opened")});const p=document.querySelectorAll(".projects__view");let a=null;p.forEach(e=>{e.addEventListener("click",t=>{a&&a.classList.remove("projects__view--current"),t.preventDefault(),e.classList.toggle("projects__view--current"),a=e})}),document.querySelectorAll(".education__list .button").forEach((e,t)=>{e.addEventListener("click",e=>{e.preventDefault(),document.querySelector("body").appendChild(new l(o[t]).render())})})}]);
//# sourceMappingURL=main.js.map