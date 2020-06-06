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

//  to do - slider one i banner slider sa s ednakvi id i klasove. nqma JS logika za banner-slider

//  second slider

$(document).ready(function() {
    // This will fire when document is ready:
    $(window).resize(function() {
        // This will fire each time the window is resized:
        if($(window).width() >= 1024) {
            // if larger or equal
            $('.slider-two')
            .not("slick-initialized")
            .slick({
                prevArrow: ".site-slider-two .prev",
                nextArrow: ".site-slider-two .next",
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000
            });
        } else {
            // if smaller
            $('.slider-two')
            .not("slick-initialized")
            .slick({
                prevArrow: ".site-slider-two .prev",
                nextArrow: ".site-slider-two .next",
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000
            });
        }
    }).resize(); // This will simulate a resize to trigger the initial run.
});
