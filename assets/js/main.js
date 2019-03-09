$(document).ready(function() {

    var $body = $('body');

    $body.imagesLoaded(function() {
        $('#header').addClass('loaded');
    });


    $("#main").onepage_scroll({
        sectionContainer: ".onepage-element", // sectionContainer accepts any kind of selector in case you don't want to use section
        easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
        // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 1000, // AnimationTime let you define how long each section takes to animate
        pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: true, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        beforeMove: function(index) {}, // This option accepts a callback function. The function will be called before the page moves.
        afterMove: function(index) {}, // This option accepts a callback function. The function will be called after the page moves.
        loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
        keyboard: true, // You can activate the keyboard controls
        responsiveFallback: false, // You can fallback to normal page scroll by defining the width of the browser in which
        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
        // the browser's width is less than 600, the fallback will kick in.
        direction: "vertical" // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
    });

    var classes = ['bg-1', 'bg-2', 'bg-3'];
    var i = 1;
    var minus = 0;
    $('.first-page').addClass('bg-1');
    setInterval(function() {
        $('.first-page').addClass(classes[i++ % classes.length]);
        $('.first-page').removeClass(classes[minus++ % classes.length]);
    }, 5000);

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

    $(".panel").hover(function() {
            $(this).addClass('panel-hovered');

            //setTimeout(function() {
            //  $('.panel-content-added').slideDown(400);
            //}, 700)
        },
        function() {
            $(this).removeClass('panel-hovered');
            // $('.panel-content-added').slideUp(400);
        });

    $('#slider-wrapper .row').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    });

});
console.log('working-js');