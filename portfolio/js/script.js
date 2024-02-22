const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// const works__items = document.querySelectorAll('.works__item-photo img');
const hoverLabels = document.querySelectorAll('.hover-labels');
const items = document.querySelector('.works__items');

const works__item_photos = document.querySelectorAll('.works__item-photo');

function addBlur(target) {
    target.querySelector('img').style.filter = 'blur(4px)';
}

function removeBlur(target) {
    target.querySelector('img').style.filter = 'none';
}

function showLabels(target) {
    target.querySelector('.hover-labels').classList.remove('hidden');
}

function hideLabels(target) {
    target.querySelector('.hover-labels').classList.add('hidden');
}

works__item_photos.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        addBlur(e.currentTarget);
        showLabels(e.currentTarget);
    });

    item.addEventListener('mouseleave', (e) => {
        removeBlur(e.currentTarget);
        hideLabels(e.currentTarget);
    });

    item.querySelector('.hover-labels').addEventListener('mouseenter', (e) => {
        showLabels(e.currentTarget.parentElement);
    });

    item.querySelector('.hover-labels').addEventListener('mouseleave', (e) => {
        hideLabels(e.currentTarget.parentElement);
    });
});
