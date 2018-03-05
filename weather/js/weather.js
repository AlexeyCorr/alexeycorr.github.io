'use strict';

(function () {
  var CITIES = {
    MOSCOW: {
      lat: 55.75,
      lon: 37.61
    },
    SARANSK: {
      lat: 54.20,
      lon: 45.17
    },
    ELNIKI: {
      lat: 54.622400,
      lon: 43.867979
    },
    MAIAMI: {
      lat: 25.76,
      lon: -80.19
    },
    NEW_YORK: {
      lat: 40.71,
      lon: -74.01
    },
    SEOUL: {
      lat: 37.57,
      lon: 126.98
    },
    BUSAN: {
      lat: 35.18,
      lon: 129.08
    }
  };
  var CITY = document.querySelector('#city');
  var URL = 'https://fcc-weather-api.glitch.me/api/current?lat=' + CITIES[CITY.value].lat + '&lon=' + CITIES[CITY.value].lon + '';

  var ERROR_TEXTS = {
    400: 'Неверный запрос',
    401: 'Пользователь не авторизован',
    403: 'Доступ запрещен',
    404: 'Ничего не найдено',
    500: 'Внутренняя ошибка сервера'
  };
  var CODE_OK = 200;

  var createRequest = function (onLoad) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';
    xhr.timeout = 10000;

    xhr.addEventListener('load', function () {
      if (xhr.status === CODE_OK) {
        onLoad(xhr.response);
      } else {
        alert('Код ошибки: ' + xhr.status + ' ' + ERROR_TEXTS[xhr.status]);
      }
    });

    xhr.addEventListener('error', function () {
      alert('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      alert('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    return xhr;
  };

  // Загрузка данных с сервера
  var load = function (onLoad) {
    var xhr = createRequest(onLoad);

    xhr.open('GET', URL, true);
    xhr.send();
  };

  var successHandler = function (data) {
    var dataWether = data;
    drawData(dataWether);
    console.log(dataWether);
  };

  load(successHandler);

  var icon = document.querySelector('#icon');
  var temp = document.querySelector('#temp');
  var desc = document.querySelector('#desc');
  var wind = document.querySelector('#wind');

  var drawData = function (data) {
    // city.textContent = data.name;
    icon.src = data.weather[0].icon;
    temp.textContent = Math.round(data.main.temp);
    desc.textContent = data.weather[0].description;
    wind.textContent = Math.round(data.wind.speed);
  };

	CITY.addEventListener('change', function () {
		URL = 'https://fcc-weather-api.glitch.me/api/current?lat=' + CITIES[CITY.value].lat + '&lon=' + CITIES[CITY.value].lon + '';
		load(successHandler);
	});
})();
