$(document).ready(function(){
    var owl = $(".services__owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        items: 1
    });

    $('#services-button-prev').click(function() {
        owl.trigger('prev.owl.carousel');
    });

    $('#services-button-next').click(function() {
        owl.trigger('next.owl.carousel');
    });
});

$(document).ready(function(){
    var owl = $(".works__slider").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        margin: 50,
        responsive: {
            0: {
                items: 5
            },
        },
        stagePadding: 50,
        autoWidth: false
    });

    function centerSlider() {
        var windowWidth = $(window).width();
        var sliderWidth = $('.works__background').outerWidth();
        var offset = (windowWidth - sliderWidth) / 2;

        $('.works__background').css('transform', 'translateX(' + offset + 'px)');
    }

    centerSlider();
    $(window).resize(function() {
        centerSlider();
    });


    $('#works-button-prev').click(function() {
        owl.trigger('prev.owl.carousel');
    });

    $('#works-button-next').click(function() {
        owl.trigger('next.owl.carousel');
    });
});

$(document).ready(function(){
    var owl = $(".reviews__slider").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        items: 1
    });

    $('#reviews-button-prev').click(function() {
        owl.trigger('prev.owl.carousel');
    });

    $('#reviews-button-next').click(function() {
        owl.trigger('next.owl.carousel');
    });

    $('#reviews-button-prev-pc').click(function() {
        owl.trigger('prev.owl.carousel');
    });

    $('#reviews-button-next-pc').click(function() {
        owl.trigger('next.owl.carousel');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const callButton = document.querySelector(".header-top__call-elem-button");
    const callPopup = document.querySelector(".header-top__call-elem-popup");

    const locationButton = document.querySelector(".header-top__location-button");
    const locationPopup = document.querySelector(".header-top__location-popup");

    const menuButton = document.querySelector(".header__menu-button");
    const menuPopup = document.querySelector(".header__menu");

    function togglePopup(event, popup) {
        event.preventDefault();
        popup.classList.toggle("active");
        console.log(menuPopup);
    }

    callButton.addEventListener("click", function(event) {
        togglePopup(event, callPopup);
    });

    locationButton.addEventListener("click", function(event) {
        togglePopup(event, locationPopup);
    });

    menuButton.addEventListener("click", function(event) {
        togglePopup(event, menuPopup);
    });

    document.addEventListener("click", function(event) {
        if (!callPopup.contains(event.target) && !callButton.contains(event.target)) {
            callPopup.classList.remove("active");
        }
        if (!locationPopup.contains(event.target) && !locationButton.contains(event.target)) {
            locationPopup.classList.remove("active");
        }
        if (!menuPopup.contains(event.target) && !menuButton.contains(event.target)) {
            menuPopup.classList.remove("active");
        }
    });

    callPopup.addEventListener("click", function(event) {
        event.stopPropagation();
    });

    locationPopup.addEventListener("click", function(event) {
        event.stopPropagation();
    });

    menuPopup.addEventListener("click", function(event) {
        event.stopPropagation();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var menus = document.querySelectorAll('.header__item-menu');
    
    menus.forEach(function(menu) {
        var toggleLink = menu.querySelector('.header__item');
        var toggleList = menu.querySelector('.header__item-under');
        var arrowIcon = toggleLink.querySelector('img');

        toggleLink.addEventListener('click', function(event) {
            event.preventDefault();
            toggleList.classList.toggle('active');
            arrowIcon.classList.toggle('rotate');

            menus.forEach(function(otherMenu) {
                if (otherMenu !== menu) {
                    var otherList = otherMenu.querySelector('.header__item-under');
                    var otherArrowIcon = otherMenu.querySelector('.header__item img');
                    otherList.classList.remove('active');
                    otherArrowIcon.classList.remove('rotate');
                }
            });
        });

        document.addEventListener('click', function(event) {
            if (!menu.contains(event.target)) {
                toggleList.classList.remove('active');
                arrowIcon.classList.remove('rotate');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var deliveryTab = document.getElementById('delivery-tab');
    var paymentTab = document.getElementById('payment-tab');
    var deliveryContent = document.getElementById('delivery-content');
    var paymentContent = document.getElementById('payment-content');

    deliveryTab.addEventListener('click', function() {
        deliveryTab.classList.add('active');
        paymentTab.classList.remove('active');

        deliveryContent.classList.add('active');
        paymentContent.classList.remove('active');
    });

    paymentTab.addEventListener('click', function() {
        paymentTab.classList.add('active');
        deliveryTab.classList.remove('active');

        paymentContent.classList.add('active');
        deliveryContent.classList.remove('active');
    });
});