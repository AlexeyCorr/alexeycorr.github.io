'use strict';

(function () {
  var advertCard = null;

  var removeAdvert = function () {
    if (advertCard) {
      window.map.removeChild(advertCard);
      advertCard = null;
    }
  };

  var onEscKeydown = function (event) {
    window.util.isEscEvent(event, popupClose);
  };

  var popupClose = function () {
    removeAdvert();
    selectedPin.classList.remove('map__pin--active');
    document.removeEventListener('keydown', onEscKeydown);
  };

  // Функция показа объявления
  var selectedPin;
  var createAdvert = function (target, adverts) {
    if (selectedPin) {
      selectedPin.classList.remove('map__pin--active');
      removeAdvert();
    }
    selectedPin = target;
    advertCard = window.card.createAdvertBoard(adverts);
    window.map.insertBefore(advertCard, window.map.querySelector('.map__filters-container'));
    var buttonClose = advertCard.querySelector('.popup__close');
    selectedPin.classList.add('map__pin--active');
    buttonClose.addEventListener('click', function () {
      popupClose();
    });
    document.addEventListener('keydown', onEscKeydown);
  };

  window.showCard = {
    createAdvert: createAdvert,
    removeAdvert: removeAdvert
  };
})();
