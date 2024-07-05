$(document).ready(function(){
    var owl = $(".services__owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        items: 1
    });

    // Кастомные кнопки для навигации
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
        margin: 50, // Отступ между элементами
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

    // Центрирование слайдера при загрузке страницы и при изменении размера окна
    centerSlider();
    $(window).resize(function() {
        centerSlider();
    });


    // Кастомные кнопки для навигации
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

    // Кастомные кнопки для навигации
    $('.buttons-slider__arrow_left').click(function() {
        owl.trigger('prev.owl.carousel');
    });

    $('.buttons-slider__arrow_right').click(function() {
        owl.trigger('next.owl.carousel');
    });
});