const headerScroll = document.querySelector('.header-scroll');
const headerScrollButtonTopDrop = document.querySelector('#header-scroll-top-drop-button');
const headerScrollButtonLiveDrop = document.querySelector('#header-scroll-live-drop-button');

headerScrollButtonTopDrop.addEventListener('click', () => {
    headerScrollButtonTopDrop.querySelector('svg').querySelector('path').setAttribute('fill', 'white');
    headerScrollButtonTopDrop.querySelector('.header-scroll__button-text').classList.add('header-scroll__button-text_active');

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

    headerScrollButtonTopDrop.querySelector('.header-scroll__button-text').classList.remove('header-scroll__button-text_active');
    headerScrollButtonTopDrop.querySelector('svg').querySelector('path').setAttribute('fill', '#8b95ad');
});

