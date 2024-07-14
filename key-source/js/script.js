
function openTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');

    const activeButton = Array.from(buttons).find(button => button.getAttribute('onclick').includes(tabId));
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    openTab('tab1');
});


function togglePromoInput() {
    const promoInput = document.querySelector('.cart__promo-input');
    if (promoInput.style.display === 'none' || promoInput.style.display === '') {
        promoInput.style.display = 'block';
    } else {
        promoInput.style.display = 'none';
    }
}


function toggleDropdown() {
    const dropdown = document.getElementById('quantityDropdown');
    dropdown.classList.toggle('open');
}



document.addEventListener('DOMContentLoaded', () => {
    const modalOverlay = document.getElementById('modalOverlay');
    const openModalButton = document.getElementById('openModalButton');
    const closeButton = document.getElementById('closeButton');

    openModalButton.addEventListener('click', () => {
        modalOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    closeButton.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            modalOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
