!function(n){var r={};function t(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=r,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(o,e){if(1&e&&(o=t(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var r in o)t.d(n,r,function(e){return o[e]}.bind(null,r));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o,n){n(1),n(2),e.exports=n(3)},function(e,o){$(document).ready(function(){if($(document).width()<992){var e=0,o=0;$(document).on("scroll",function(){o=$(window).scrollTop(),e<o&&100<o?$("#header-homepage").addClass("fixed"):$("#header-homepage").removeClass("fixed"),e=o}),$("#panel-wrapper").slick({infinite:!1,mobileFirst:!0,fade:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0,adaptiveHeight:!1,responsive:[{breakpoint:992,settings:"unslick"}]}),$(".gallery-wrapper, #nav-fourth").slick({infinite:!1,mobileFirst:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0,responsive:[{breakpoint:992,settings:"unslick"}]})}})},function(e,o){$(document).ready(function(){$("body").imagesLoaded(function(){$("#header").addClass("loaded")}),$("#main").onepage_scroll({sectionContainer:".onepage-element",easing:"ease",animationTime:1e3,pagination:!0,updateURL:!0,loop:!1,keyboard:!0,responsiveFallback:992,direction:"vertical"}),$("#burger").click(function(){$(this).toggleClass("burgeractive")});var e=$(".menu-opener"),o=$("#overlay-navigation");if(e.on("click",function(){o.show(500)}),$("#overlay-navigation .menu-closer").on("click",function(){o.hide(300),$("#burger").removeClass("burgeractive")}),$("#slider-wrapper .row").slick({infinite:!0,arrows:!0,prevArrow:'<span class="icon-arrow-left slick-prev"></span>',nextArrow:'<span class="icon-arrow-right slick-next"></span>',slidesToShow:2,slidesToScroll:1,responsive:[{breakpoint:767,settings:{slidesToShow:1,arrows:!1,dots:!0}}]}),$("#contain-menu-items a").on("click",function(){o.hide(300)}),767<$(document).width()){var n=["bg-1","bg-2","bg-3"],r=1,t=0,i=$("#first-page");i.addClass("bg-1"),setInterval(function(){i.addClass(n[r++%n.length]),i.removeClass(n[t++%n.length])},5e3),$(".panel").hover(function(){$(this).addClass("panel-hovered")},function(){$(this).removeClass("panel-hovered")})}var s=$("#fourth-page");$(".hover-element-one").hover(function(){s.addClass("bg-1"),s.removeClass("bg-2"),s.removeClass("bg-3")}),$(".hover-element-two").hover(function(){s.addClass("bg-2"),s.removeClass("bg-1"),s.removeClass("bg-3")}),$(".hover-element-three").hover(function(){s.addClass("bg-3"),s.removeClass("bg-2"),s.removeClass("bg-1")})}),console.log("working-js")},function(e,o,n){}]);