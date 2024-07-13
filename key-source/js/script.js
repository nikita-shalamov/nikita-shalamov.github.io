
function openTab(tabId) {
    // Скрываем все табы
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Удаляем активный класс у всех кнопок
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Показываем выбранный таб
    document.getElementById(tabId).classList.add('active');

    // Добавляем активный класс к кнопке
    const activeButton = Array.from(buttons).find(button => button.getAttribute('onclick').includes(tabId));
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Устанавливаем начальный таб
document.addEventListener('DOMContentLoaded', () => {
    openTab('tab1');
});


document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalOverlay = document.getElementById('modalOverlay');
    const openModalButton = document.getElementById('openModalButton');
    const closeButton = document.getElementById('closeButton');

    openModalButton.addEventListener('click', () => {
        modalOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Disable scrolling
    });

    closeButton.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling
    });

    window.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            modalOverlay.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling
        }
    });
});
