// Находим все элементы с классом navbar__icon
const icons = document.querySelectorAll('.navbar__icon');

// Проходим по каждому элементу
icons.forEach(icon => {
    // Проверяем, есть ли у элемента класс navbar__icon_active
    if (icon.classList.contains('navbar__icon_active')) {
        // Если есть, устанавливаем фиолетовый цвет для иконки
        icon.style.fill = '#CC00FF';
    } else {
        // Если нет, устанавливаем белый цвет для иконки
        icon.style.fill = 'white';
    }
});
