$(document).ready(function(){
  $('.avto-slider').slick({
    arrows: true, // Отвечает за показ стрелок
    dots:true, // Отвечает за показ пагинации
    speed: 800, // скорость прокрутки
    slidesToShow: 1,
    adaptiveHeight: true,
    easing: 'ease', // стиль анимации прокрутки
    prevArrow: $('.res-left__btn'), // стрелка влево
    nextArrow: $('.res-right__btn'), // стрелка вправо
  });
});