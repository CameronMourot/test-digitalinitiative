$(document).ready(function() {

    let breakpoint = 992;

    if ($(document).width() < breakpoint) {

        var direction = 0,
            scrollPosCurrent = 0;
        $(document).on('scroll', function() {
            scrollPosCurrent = $(window).scrollTop();
            if (scrollPosCurrent > direction && scrollPosCurrent > 100) {
                // downscroll code
                $('#header-homepage').addClass('fixed');
            } else {
                // upscroll code
                $('#header-homepage').removeClass('fixed');
            }
            direction = scrollPosCurrent;
        });

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
                breakpoint: 992,
                settings: "unslick"
            }]
        });

        $('.gallery-wrapper').slick({
            infinite: false,
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            responsive: [{
                    breakpoint: 992,
                    settings: "unslick"
                },
                {
                    breakpoint: 767,
                    settings: {
                        infinite: true,
                        slidesToShow: 2,
                        autoplay: false,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });

        $('#nav-fourth').slick({
            infinite: false,
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            responsive: [{
                breakpoint: 767,
                settings: "unslick"
            }]
        });

    }
});