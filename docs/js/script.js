new Swiper('.image-slider',{
    //arrows
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    pagination:{
        el: '.swiper-pagination',

        clickable: true,

        //dynamicBullets: true,

        //numbers
        // renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + '</span>'
        // }

        //type: 'fraction',
    },

    //grabCursor: true,

    // hashNavigation:{
    //     watchState: true,
    // },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    // mousewheel: {
    //     sensitivity: 1,
    //     eventsTarget: '.image-slider',
    // },

    //slideToClickedSlide: true,

    //spaceBetween: 10,

    //центрирование слайда
    //centeredSlides: true,

    loop: true,

    //стартовый слайд
    initialSlide: 0,

    //freeMode: true,

    autoplay: {
        delay: 5000,
        //stopOnLastSlide: true,
        //disableOnInteraction: true,
    },

    speed: 1000,

    //direction: 'vertical',

    breakpoints: {
        320: {
            //кол-во слайдов
            slidesPerView: 1,
            //кол-во слайдов за свайп
            slidesPerGroup: 1,
        },
        1240: {
            //кол-во слайдов
            slidesPerView: 2,
            //кол-во слайдов за свайп
            slidesPerGroup: 2,
        },
    }
});;
$(document).ready(function () {
    $('.nav__burger').click(function (event) {
        $('.nav__burger,.nav__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.nav_link[data-goto]').click(function (event) {
        $('.nav__burger,.nav__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});;
$(document).ready(function () {
    $(window).resize(function () {
        if ($(window).width() < 500) {
            $('.services__content').addClass('spoiler');
            $('.services__name').removeClass('active');
            $('.services__description').slideUp();
        }
        if ($(window).width() > 500) {
            $('.services__content').removeClass('spoiler');
            $('.services__name').removeClass('active');
            $('.services__description').slideDown();
        }
    });
    if ($(window).width() < 500) {
        $(window).scroll(function(){
            $('.services__name').removeClass('active');
            $('.services__description').slideUp();
        });
        $('.services__content').addClass('spoiler');
    }
    if ($(window).width() > 500) {
        $('.services__description').slideDown();
        $('.services__content').removeClass('spoiler');
        $('.services__name').removeClass('active');
    }
    $('.services__name').click(function () {
        if($('.services__content').hasClass('spoiler')){
            if($('.services__content').hasClass('one')){
                $('.services__name').not($(this)).removeClass('active');
                $('.services__description').not($(this).next()).slideUp();
            }
            $(this).toggleClass('active').next().slideToggle();
        }
    });
});;

const menuLinks = document.querySelectorAll('.nav_link[data-goto]');
if(menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
};