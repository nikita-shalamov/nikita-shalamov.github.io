
const body = document.querySelector('body');

// вывод средств

const cardWithdrawSubtitle = document.querySelector('.withdraw__subtitle-card');
const skinsFarmWithdrawSubtitle = document.querySelector('.withdraw__subtitle-skins-farm');
const cardForm = document.querySelector('.withdraw__form');
const skinsFarmForm = document.querySelector('.withdraw__form_skins-farm');
const buttonWithdrawForm = document.querySelector('.button_withdraw');

if (cardWithdrawSubtitle) {
    cardWithdrawSubtitle.addEventListener('click', () => {
        cardWithdrawSubtitle.classList.add('withdraw__subtitle_active');
        skinsFarmWithdrawSubtitle.classList.remove('withdraw__subtitle_active');
        cardForm.classList.remove('display-none');
        skinsFarmForm.classList.add('display-none');
        buttonWithdrawForm.classList.remove('withdraw__button_skins-farm');
    });
    
    skinsFarmWithdrawSubtitle.addEventListener('click', () => {
        skinsFarmWithdrawSubtitle.classList.add('withdraw__subtitle_active');
        cardWithdrawSubtitle.classList.remove('withdraw__subtitle_active');
        skinsFarmForm.classList.remove('display-none');
        cardForm.classList.add('display-none');
        buttonWithdrawForm.classList.add('withdraw__button_skins-farm');
    });
}

// модалка вывод средств открытие

const withdrawButton = document.querySelector('.hello__balance-output_active');
const withdrawModal = document.querySelector('.modal_withdraw');
const modalWithdrawClose = document.querySelector('#withdraw-close');

if (withdrawButton) {
    withdrawButton.addEventListener('click', () => {
        withdrawModal.classList.remove('display-none');
        body.classList.add('overflow-hidden');
    });
    
    modalWithdrawClose.addEventListener('click', () => {
        withdrawModal.classList.add('display-none');
        body.classList.remove('overflow-hidden');
    });
}

// модалка info

const promocodeInfoButton = document.querySelector('.hello__change-promo-info');
const promocodeInfoModal = document.querySelector('.modal_promocode');
const modalInfoClose = document.querySelector('#info-close');

if (promocodeInfoButton) {
    promocodeInfoButton.addEventListener('click', () => {
        promocodeInfoModal.classList.remove('display-none');
        body.classList.add('overflow-hidden');
    });
    
    modalInfoClose.addEventListener('click', () => {
        promocodeInfoModal.classList.add('display-none');
        body.classList.remove('overflow-hidden');
    });
}

// источники рефералов

const searchButton = document.querySelector('.settings__referrals-button');
const searchButtonImg = document.querySelector('.settings__referrals-button img');
const searchList = document.querySelector('.settings__referrals-list');

if (searchButton) {
    searchButton.addEventListener('click', () => {
        searchList.classList.toggle('display-none');
        searchButtonImg.classList.toggle('rotate');
    });
}
