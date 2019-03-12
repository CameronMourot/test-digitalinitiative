$(document).ready(function() {

    $('body').imagesLoaded(function() {
        $('#header').addClass('loaded');
    });

    $("#main").onepage_scroll({
        sectionContainer: ".onepage-element",
        easing: "ease",
        animationTime: 1000,
        pagination: true,
        updateURL: true,
        loop: false,
        keyboard: true,
        responsiveFallback: 992,
        direction: "vertical"
    });

    // Burger menu
    $("#burger").click(function check() {
        $(this).toggleClass("burgeractive");
    });

    var $button = $('.menu-opener');
    var $overlay = $('#overlay-navigation');

    $button.on('click', function() {
        $overlay.show(500);
    });

    $('#overlay-navigation .menu-closer').on('click', function() {
        $overlay.hide(300);
        $("#burger").removeClass("burgeractive");
    });

    // Slider third page
    $('#slider-wrapper .row').slick({
        infinite: true,
        arrows: true,
        prevArrow: '<span class="icon-arrow-left slick-prev"></span>',
        nextArrow: '<span class="icon-arrow-right slick-next"></span>',
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        }]
    });

    $('#contain-menu-items a').on('click', function() {
        $overlay.hide(300);
    });


    if ($(document).width() > 767) {
        // Background first page
        var $classes = ['bg-1', 'bg-2', 'bg-3'];
        var $i = 1;
        var $minus = 0;
        var $firstpage = $('#first-page');

        $firstpage.addClass('bg-1');
        setInterval(function() {
            $firstpage.addClass($classes[$i++ % $classes.length]);
            $firstpage.removeClass($classes[$minus++ % $classes.length]);
        }, 5000);

        // Panels second page
        $(".panel").hover(function() {
                $(this).addClass('panel-hovered');
            },
            function() {
                $(this).removeClass('panel-hovered');
            });
    }

    // Hovering fourth page
    var $fourth = $('#fourth-page');
    $(".hover-element-one").hover(function() {
        $fourth.addClass('bg-1');
        $fourth.removeClass('bg-2');
        $fourth.removeClass('bg-3');
    });
    $(".hover-element-two").hover(function() {
        $fourth.addClass('bg-2');
        $fourth.removeClass('bg-1');
        $fourth.removeClass('bg-3');
    });
    $(".hover-element-three").hover(function() {
        $fourth.addClass('bg-3');
        $fourth.removeClass('bg-2');
        $fourth.removeClass('bg-1');
    });



});
console.log('working-js');