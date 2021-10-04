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
        if($('.services__content').hasClass('spoiler')){
            if($('.services__content').hasClass('one')){
                $('.services__name').not($(this)).removeClass('active');
                $('.services__description').not($(this).next()).slideUp();
            }
            $(this).toggleClass('active').next().slideToggle();
            if($(this).slideUp){
                $(this).removeClass('active');
            }
        }
    });
});