const errorBalanceModal = document.querySelector('.modal_error-balance');
const errorBalanceCloseBtn = document.querySelector('.modal-error__close');

errorBalanceCloseBtn.addEventListener('click', () => {
    errorBalanceModal.classList.add('hidden');
    body.classList.remove('modal-opened');
});