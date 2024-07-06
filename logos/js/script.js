$(document).ready(function(){
    var owl = $(".services__owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        items: 1
    });

    $('.buttons-slider__arrow_left').click(function() {
        owl.trigger('prev.owl.carousel');
    });

    $('.buttons-slider__arrow_right').click(function() {
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


    $('.buttons-slider__arrow_left').click(function() {
        owl.trigger('prev.owl.carousel');
    });

    $('.buttons-slider__arrow_right').click(function() {
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

    $('.buttons-slider__arrow_left').click(function() {
        owl.trigger('prev.owl.carousel');
    });

    $('.buttons-slider__arrow_right').click(function() {
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

