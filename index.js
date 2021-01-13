window.onload=function(){
    $('.slider').slick({
    autoplay:true,
    autoplaySpeed:1000,
    arrows:true,
    prevArrow:'<button type="button" class="slick-prev"></button>',
    nextArrow:'<button type="button" class="slick-next"></button>',
    centerMode:true,
    slidesToShow:3,
    slidesToScroll:2
    });
  };
  