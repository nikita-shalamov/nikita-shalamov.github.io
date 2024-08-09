document.getElementById('promo').addEventListener('input', function() {
    this.value = this.value.toUpperCase();
});

document.getElementById('balance').addEventListener('input', function (event) {
    // Удаляем все нецифровые символы
    let inputValue = event.target.value.replace(/[^\d]/g, '');
    
    // Форматируем число с пробелами
    inputValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    // Добавляем символ валюты
    event.target.value = inputValue ? `${inputValue} ₽` : '';

    // Устанавливаем позицию курсора перед символом валюты
    const cursorPosition = inputValue.length;
    event.target.setSelectionRange(cursorPosition, cursorPosition);
});
