const authModalCloseBtn = document.querySelector('.modal-auth__close');
const authModalOpenBtn = document.querySelector('.button_auth');
const authModal = document.querySelector('.modal_auth');


authModalCloseBtn.addEventListener('click', () => {
    authModal.classList.add('hidden');
    body.classList.remove('modal-opened');
});

authModalOpenBtn.addEventListener('click', () => {
    authModal.classList.remove('hidden');
    body.classList.add('modal-opened');
});