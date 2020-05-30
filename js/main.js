//  first slider
 
 $('.slider-one')
 .not("slick-initialized")
 .slick({
     autoplay: true,
     autoplaySpeed: 2500,
     dots: true,
     prevArrow: ".site-slider .slider-btn .prev",
     nextArrow: ".site-slider .slider-btn .next"
 })


//  second slider
 $('.slider-two')
 .not("slick-initialized")
 .slick({
     prevArrow: ".site-slider-two .prev",
     nextArrow: ".site-slider-two .next",
     slidesToShow: 5,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2000
 })

