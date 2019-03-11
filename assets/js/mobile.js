$(document).ready(function() {

    let breakpoint = 768;

    if ($(document).width() < breakpoint) {


        $('.gallery-wrapper').slick({
            infinite: false,
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            responsive: [{
                breakpoint: 768,
                settings: "unslick"
            }]
        });

    }
});