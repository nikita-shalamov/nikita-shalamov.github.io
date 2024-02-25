// Функция для применения стилей в зависимости от ширины экрана
function applyStylesBasedOnWidth() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 320 && screenWidth <= 380) {
        document.querySelector('.main').style.marginTop = '40px';
        document.querySelector('.background__up-block').style.display = 'none';

        document.querySelector('.title').style.fontSize = '24px';
        document.querySelector('.title-2').style.fontSize = '26px';

        const soldiers = document.querySelectorAll('.soldier');
        soldiers.forEach(soldier => {
            soldier.style.width = '400px';
            soldier.style.height = '420px';
            soldier.style.bottom = '0';
            soldier.style.left = '10%';
        });
    } else if (screenWidth <= 500) {
        document.querySelector('.main').style.marginTop = '0px';
        document.querySelector('.button__big').style.bottom = '10px';

        const soldiers = document.querySelectorAll('.soldier');
        soldiers.forEach(soldier => {
            soldier.style.width = '320px';
            soldier.style.height = '325.625px';
            soldier.style.bottom = '0';
            soldier.style.left = '30%';
        });

        document.querySelector('.background__low-block').style.height = '40px';
        document.querySelector('.background__image-fire').style.bottom = '-10%';
        document.querySelector('.background__image-fire').style.left = '-40%';

        document.querySelector('.places__underline').style.top = '28px';
        document.querySelector('.places__underline').style.right = '20px';

        document.querySelector('.title').style.fontSize = '20px';
        document.querySelector('.title-2').style.fontSize = '20px';
        document.querySelector('.subtitle').style.fontSize = '18px';

        const places = document.querySelectorAll('.place-1, .place-2, .place-3');
        places.forEach(place => {
            place.style.fontSize = '25px';
        });

        const places2 = document.querySelectorAll('.place-4, .place-5');
        places2.forEach(place => {
            place.style.fontSize = '23px';
        });

        const places3 = document.querySelectorAll('.place-6, .place-7');
        places3.forEach(place => {
            place.style.fontSize = '21px';
        });

        document.querySelector('.place-8').style.fontSize = '18px';
    } else if (screenWidth <= 640) {
        document.querySelector('.main').style.marginTop = '0px';
        document.querySelector('.button__big').style.bottom = '20px';

        const soldiers = document.querySelectorAll('.soldier');
        soldiers.forEach(soldier => {
            soldier.style.width = '320px';
            soldier.style.height = '325.625px';
            soldier.style.bottom = '0';
            soldier.style.left = '30%';
        });

        document.querySelector('.background__low-block').style.height = '40px';
        document.querySelector('.background__image-fire').style.bottom = '-10%';
        document.querySelector('.background__image-fire').style.left = '-40%';

        document.querySelector('.title').style.fontSize = '20px';
        document.querySelector('.title-2').style.fontSize = '20px';
        document.querySelector('.subtitle').style.fontSize = '16px';
    } else if (screenWidth <= 800) {
        document.querySelector('.main').style.marginTop = '40px';
        document.querySelector('.background__up-block').style.display = 'none';

        document.querySelector('.title').style.fontSize = '24px';
        document.querySelector('.title-2').style.fontSize = '26px';

        const soldiers = document.querySelectorAll('.soldier');
        soldiers.forEach(soldier => {
            soldier.style.width = '400px';
            soldier.style.height = '420px';
            soldier.style.bottom = '0';
            soldier.style.left = '10%';
        });
    }
}

// Вызов функции при загрузке страницы и при изменении размера экрана
window.onload = applyStylesBasedOnWidth;
window.onresize = applyStylesBasedOnWidth;
