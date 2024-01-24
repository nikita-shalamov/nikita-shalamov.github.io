$(document).ready(function(){
    const slider = tns({
        container: '.my-slider',
        items: 1,
        controls: false,
        nav: false,
        slideBy: 'page'
    });
    
    document.querySelector('.prev').onclick = function () {
        slider.goTo("prev");
    };

    document.querySelector('.next').onclick = function () {
        slider.goTo("next");
    };

    document.querySelector('.carousel__btn1').onclick = function () {
        slider.goTo(0);
    };

    document.querySelector('.carousel__btn2').onclick = function () {
        slider.goTo(1);
    };

    document.querySelector('.carousel__btn3').onclick = function () {
        slider.goTo(2);
    };

    $('ul.catalog__tabs').on('click', 'li:not(catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    $('.carousel__nav').on('click', 'button:not(.btn_active)', function() {
        $(this)
            .addClass('btn_active').siblings().removeClass('btn_active');
    });
    

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('fast');
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('fast');
    });

    $('.button_buy').on('click', function() {
        $('.overlay, #order').fadeIn('fast');
    });
    // с помощью each перебираем каждую кнопку
    // с eq получаем определенный элемент по порядку
    $('.button_buy').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('fast');
        })
    });

    function valideForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Плиз, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                phone: "Плиз введите свой телефон",
                email: {
                    required: "Плиз, введите свою почту",
                    email: "Неправильно введен адрес почты"
                }
            }
        });
    };

    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');

    // scroll

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function() {
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    new WOW().init();
});
 
