const errorWithdrawModal = document.querySelector('.modal_error-withdraw');
const errorWithdrawCloseBtn = document.querySelector('.modal-error__close');

errorWithdrawCloseBtn.addEventListener('click', () => {
    errorWithdrawModal.classList.add('hidden');
    body.classList.remove('modal-opened');
});