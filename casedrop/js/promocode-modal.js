const promocodeModalBtn = document.querySelector('.button_promocode-modal');
const promoModalWindow = document.querySelector('.modal_promocode');
const activatePromoModalBtn = document.querySelector('.button_activate-promocode');

if (activatePromoModalBtn) {
    activatePromoModalBtn.addEventListener('click', () => {
        promoModalWindow.classList.remove('hidden');
        body.classList.add('modal-opened');
    });
}

if (promocodeModalBtn) {
    promocodeModalBtn.addEventListener('click', () => {
        promoModalWindow.classList.remove('hidden');
        body.classList.add('modal-opened');
    });
}

ModalCloseBtn.addEventListener('click', () => {
    promoModalWindow.classList.add('hidden');
    body.classList.remove('modal-opened');
});