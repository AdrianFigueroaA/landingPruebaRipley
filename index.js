window.onload=function(){
    $('.slider_scooters_movilidad').slick({
    autoplay:true,
    autoplaySpeed:1000,
    arrows:true,
    prevArrow:'<button type="button" class="slick-prev"><img src="assets/img/iconos/left-arrow.svg" alt=""></button>',
    nextArrow:'<button type="button" class="slick-next"><img src="assets/img/iconos/right-arrow.svg" alt=""></button>',
    centerMode:true,
    slidesToShow:2,
    slidesToScroll:3
    });

    $('.slider-scooters').slick({
        autoplay:true,
        autoplaySpeed:1000,
        arrows:true,
        prevArrow:'<button type="button" class="slick-prev"><img src="assets/img/iconos/left-arrow.svg" alt=""></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="assets/img/iconos/right-arrow.svg" alt=""></button>',
        centerMode:true,
        slidesToShow:1,
        slidesToScroll:1
        });

    $('.slider-scooters-mobile').slick({
        autoplay:true,
        autoplaySpeed:1000,
        arrows:true,
        prevArrow:'<button type="button" class="slick-prev"><img src="assets/img/iconos/left-arrow.svg" alt=""></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="assets/img/iconos/right-arrow.svg" alt=""></button>',
        centerMode:true,
        slidesToShow:1,
        slidesToScroll:1
        });

  };
