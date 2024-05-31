function changeIconColor(element) {
    var navbarItems = document.querySelectorAll('.navbar__item');
    navbarItems.forEach(function(item) {
        item.classList.remove('navbar__icon_active');
    });
    var icons = document.querySelectorAll('.navbar__icon img');
    icons.forEach(function(icon) {
        icon.style.fill = 'white';
    });
    element.querySelector('.navbar__icon').classList.add('navbar__icon_active');
    element.querySelector('.navbar__icon img').style.fill = 'purple';
}
