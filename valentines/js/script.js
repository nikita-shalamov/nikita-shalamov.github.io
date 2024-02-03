var element = document.getElementById('noButton');
var hoverCount = 0;

element.addEventListener('mouseover', function() {
    hoverCount++;

    if (hoverCount === 1) {
        element.classList.add('hovered_first');
    } else if (hoverCount === 2) {
        element.classList.remove('hovered_first');
        element.classList.add('hovered_second');
    } else if (hoverCount === 3) {
        element.classList.remove('hovered_second');
        element.classList.add('hovered_third');
    } else if (hoverCount === 4) {
        element.classList.remove('hovered_third');
        element.classList.add('hovered_fourth');
    }
    // Дополнительные условия или обнуление счетчика можно добавить по необходимости
});

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('first_text').classList.add('hidden');
    document.getElementById('second_text').classList.add('active');
    document.getElementById('img1').classList.add('hidden');
    document.getElementById('img').classList.add('active_photo');
    document.getElementById('buttons').classList.add('hidden');
    document.getElementById('descr').classList.add('active');
});