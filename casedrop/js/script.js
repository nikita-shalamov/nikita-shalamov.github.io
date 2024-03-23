
// появление меню
const menuButton = document.querySelector('.header__hamburger');
const menu = document.querySelector('.header__menu');

menuButton.addEventListener('click', () => {
    if (getComputedStyle(menu).display == 'none') {
        menu.style.display = 'flex';
    }
    else {
        menu.style.display = 'none';
    }
});

// закрытие рекламного баннера в header
const adsClose = document.querySelector('.ads-winter__close');
const adsWinter = document.querySelector('.ads-winter-block');

adsClose.addEventListener('click', () => {
    adsWinter.style.display = 'none';
});

// переключение языка в footer
const changeLanguageBtn = document.querySelector('.change-language');
const changeLanguageList = document.querySelector('.change-language__languages');
const arrowIcon = document.querySelector('.change-language__arrow');

changeLanguageBtn.addEventListener('click', () => {
    changeLanguageList.classList.toggle('hidden');
    arrowIcon.classList.toggle('change-language__arrow_rotate');
});

// переключение кнопок в header scroll
const headerScroll = document.querySelector('.header-scroll');
const headerScrollButtonTopDrop = document.querySelector('#header-scroll-top-drop-button');
const headerScrollButtonLiveDrop = document.querySelector('#header-scroll-live-drop-button');

headerScrollButtonTopDrop.addEventListener('click', () => {
    headerScrollButtonTopDrop.querySelector('svg').querySelector('path').setAttribute('fill', 'white');
    headerScrollButtonTopDrop.querySelector('.header-scroll__button-text').classList.add('header-scroll__button-text_active');
    headerScrollButtonTopDrop.classList.add('header-scroll__button_active');
    headerScrollButtonLiveDrop.classList.remove('header-scroll__button_active');

    headerScrollButtonLiveDrop.querySelector('.header-scroll__button-text').classList.remove('header-scroll__button-text_active');
    const rects = headerScrollButtonLiveDrop.querySelector('svg').querySelectorAll('rect');

    rects.forEach(rect => {
        rect.setAttribute('fill', '#8b95ad');
    });
});

headerScrollButtonLiveDrop.addEventListener('click', () => {
    const rects = headerScrollButtonLiveDrop.querySelector('svg').querySelectorAll('rect');

    rects.forEach(rect => {
        rect.setAttribute('fill', '#fff');
    });
    headerScrollButtonLiveDrop.querySelector('.header-scroll__button-text').classList.add('header-scroll__button-text_active');
    headerScrollButtonLiveDrop.classList.add('header-scroll__button_active');

    headerScrollButtonTopDrop.classList.remove('header-scroll__button_active');
    headerScrollButtonTopDrop.querySelector('.header-scroll__button-text').classList.remove('header-scroll__button-text_active');
    headerScrollButtonTopDrop.querySelector('svg').querySelector('path').setAttribute('fill', '#8b95ad');
});

// всплывающее окно авторизации
let authorizationReady = 0;

if (authorizationReady === 0) {
    const authModalCloseBtn = document.querySelector('.modal-auth__close');
    const authModalOpenBtn = document.querySelector('.button_auth');
    const authModal = document.querySelector('.modal_auth');

    authModalOpenBtn.addEventListener('click', () => {
        authModal.classList.remove('hidden');
        body.classList.add('modal-opened');
    });

    if (!authModal.classList.contains('hidden')) {
        authModalCloseBtn.addEventListener('click', () => {
            authModal.classList.add('hidden');
            body.classList.remove('modal-opened');
        });
    }
}