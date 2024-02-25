var width = tg.viewportWidth;

// Находим элемент с классом .text__promo
var promoText = document.querySelector('.text__promo');

// Добавляем текстовое содержимое ширины окна в элемент .text__promo
promoText.textContent = 'Ширина окна: ' + width + 'px';