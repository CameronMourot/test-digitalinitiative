$(document).ready(function() {

    let breakpoint = 768;

    if ($(document).width() < breakpoint) {


        $('#panel-wrapper').slick({
            infinite: false,
            mobileFirst: true,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            adaptiveHeight: false,
            responsive: [{
                breakpoint: 768,
                settings: "unslick"
            }]
        });

        $('.gallery-wrapper, #nav-fourth').slick({
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