var element = document.getElementById('noButton');
var hoverCount = 0;

element.addEventListener('mouseover', function() {
    hoverCount++;
    if (window.innerWidth > 576){
        if (hoverCount === 1) {
            element.classList.add('hovered_first');
            console.log(hoverCount);
        } else if (hoverCount === 2) {
            console.log(hoverCount);
            element.classList.remove('hovered_first');
            element.classList.add('hovered_second');
        } else if (hoverCount === 3) {
            console.log(hoverCount);
            element.classList.remove('hovered_second');
            element.classList.add('hovered_third');
        } else if (hoverCount === 4) {
            element.classList.remove('hovered_third');
            element.classList.add('hovered_fourth');
        }
    }
    // Дополнительные условия или обнуление счетчика можно добавить по необходимости
});


document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('first_text').classList.add('hidden');
    document.getElementById('second_text').classList.add('active');
    document.getElementById('img1').classList.add('hidden');
    document.getElementById('img').classList.add('active_photo');
    document.getElementById('sad_img').classList.remove('active_photo');
    document.getElementById('buttons').classList.add('hidden');
    document.getElementById('descr').classList.add('active');
});

document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('img1').classList.add('hidden');
    document.getElementById('sad_img').classList.add('active_photo');
    document.getElementById('noButton').classList.add('hidden');
});

function updateMainHeight() {
    var windowHeight = window.innerHeight;
    var mainElement = document.querySelector('.main');
    var newHeight = windowHeight - 20; // Пример, можно настроить по вашим требованиям
    mainElement.style.height = newHeight + 'px';
  }
  
  // Вызываем функцию при загрузке страницы
  updateMainHeight();
  
  // Вызываем функцию при изменении размера окна
  window.addEventListener('resize', updateMainHeight);