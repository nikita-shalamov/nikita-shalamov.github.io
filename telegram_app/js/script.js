// Функция для обновления информации о размерах экрана и окна браузера
function updateWindowSizeInfo() {
    // Получаем размеры экрана
    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;

    // Получаем размеры окна браузера
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Получаем информацию об устройстве
    var deviceInfo = getDeviceInfo();

    // Формируем текстовое сообщение
    var message = 'Размер экрана: ' + screenWidth + 'x' + screenHeight +
                  ', Устройство: ' + deviceInfo +
                  ', Размер окна браузера: ' + windowWidth + 'x' + windowHeight;

    // Находим элемент .text__promo и устанавливаем текстовое содержимое
    var promoText = document.querySelector('.text__promo');
    promoText.textContent = message;
}

// Функция для получения информации об устройстве
function getDeviceInfo() {
    var device = 'Unknown';

    if (navigator.userAgent.match(/Android/i)) {
        device = 'Android';
    } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        device = 'iOS';
    } else if (navigator.userAgent.match(/Windows Phone/i)) {
        device = 'Windows Phone';
    } else if (navigator.userAgent.match(/Linux/i)) {
        device = 'Linux';
    } else if (navigator.userAgent.match(/Macintosh|Mac OS/i)) {
        device = 'Mac OS';
    } else if (navigator.userAgent.match(/Windows/i)) {
        device = 'Windows';
    }

    return device;
}

// Вызываем функцию обновления информации о размерах окна и экрана при загрузке страницы
updateWindowSizeInfo();

// Добавляем обработчик события resize для отслеживания изменений размеров окна браузера
window.addEventListener('resize', updateWindowSizeInfo);
