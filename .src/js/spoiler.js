$(document).ready(function () {
    $(window).resize(function () {
        if ($(window).width() < 500) {
            $('.services__content').addClass('spoiler');
            $('.services__description').slideUp();
        } else {
            $('.services__content').removeClass('spoiler');
            $('.services__name').removeClass('active');
            $('.services__description').slideDown();
        }
    });
    $('.services__name').click(function () {
        if($('.services__content').hasClass('spoiler'))
            $(this).toggleClass('active').next().slideToggle();
    });
});