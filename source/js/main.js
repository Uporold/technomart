
var link = document.querySelectorAll('.list-item__button--buy');
var popup = document.querySelector('.popup-cart');
var close = document.querySelector('.popup-cart .close-cross');

//Модальное окно для товаров
if (popup) {

  for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        popup.classList.add('show');
    });
}

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('show');

});


window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains('show')) {
            popup.classList.remove('show');

        }
    }
});
}



var messageUs = document.querySelector('.about__button--contacts');
var popupForm = document.querySelector('.message-us');
var closeMessage = document.querySelector('.close-cross--form');

//модальное окно для обратной связи
if (popupForm) {

messageUs.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupForm.classList.add('show');
});

closeMessage.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupForm.classList.remove('show')

});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupForm.classList.contains('show')) {
          popupForm.classList.remove('show');

      }
  }
});
}

var mapButton = document.querySelector('.about__map-link');
var popupMap = document.querySelector('.map-popup');
var closeMap = document.querySelector('.map-popup .close-cross');

if (popupMap) {

  mapButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupMap.classList.add('show');
  });

  closeMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupMap.classList.remove('show')

  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupMap.classList.contains('show')) {
            popupMap.classList.remove('show');

        }
    }
  });
  }

/*link.forEach(function (entry) {
  addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("show");

    });

  });*/
