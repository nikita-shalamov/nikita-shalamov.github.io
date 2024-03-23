const withdrawModalCloseBtn = document.querySelector('.modal-withdraw__close');
// const withdrawModalOpenBtn = document.querySelector('.button_auth');
const withdrawModal = document.querySelector('.modal-withdraw');


withdrawModalCloseBtn.addEventListener('click', () => {
    withdrawModal.classList.add('hidden');
    body.classList.remove('modal-opened');
});

// authModalOpenBtn.addEventListener('click', () => {
//     authModal.classList.remove('hidden');
//     body.classList.add('modal-opened');
// });