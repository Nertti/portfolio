@@include('swiper.js');
@@include('burger.js');
@@include('spoiler.js');
if($('.services__description').slideUp() === true){
    $('.services__name').removeClass('active');
}