!function(n){var r={};function t(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=r,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(o,e){if(1&e&&(o=t(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var r in o)t.d(n,r,function(e){return o[e]}.bind(null,r));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o,n){n(1),e.exports=n(2)},function(e,o){$(document).ready(function(){$("body").imagesLoaded(function(){$("#header").addClass("loaded")}),$("#main").onepage_scroll({sectionContainer:".onepage-element",easing:"ease",animationTime:1e3,pagination:!0,updateURL:!0,beforeMove:function(e){},afterMove:function(e){},loop:!1,keyboard:!0,responsiveFallback:768,direction:"vertical"});var e=["bg-1","bg-2","bg-3"],o=1,n=0,r=$("#first-page");r.addClass("bg-1"),setInterval(function(){r.addClass(e[o++%e.length]),r.removeClass(e[n++%e.length])},5e3),$("#burger").click(function(){$(this).toggleClass("burgeractive")});var t=$(".menu-opener"),i=$("#overlay-navigation");t.on("click",function(){i.show(500)}),$("#overlay-navigation .menu-closer").on("click",function(){i.hide(300),$("#burger").removeClass("burgeractive")}),$(".panel").hover(function(){$(this).addClass("panel-hovered")},function(){$(this).removeClass("panel-hovered")}),$("#slider-wrapper .row").slick({infinite:!0,slidesToShow:2,slidesToScroll:1,responsive:[{breakpoint:767,settings:{slidesToShow:1}}]});var a=$(".gallery-wrapper").masonry({itemSelector:".grid-item",columnWidth:".grid-sizer",horizontalOrder:!0,percentPosition:!0,transitionDuration:0});a.imagesLoaded().progress(function(){a.masonry()});var s=$("#fourth-page");$(".hover-element-one").hover(function(){s.addClass("bg-1"),s.removeClass("bg-2"),s.removeClass("bg-3")}),$(".hover-element-two").hover(function(){s.addClass("bg-2"),s.removeClass("bg-1"),s.removeClass("bg-3")}),$(".hover-element-three").hover(function(){s.addClass("bg-3"),s.removeClass("bg-2"),s.removeClass("bg-1")}),$("#panel-wrapper").slick({infinite:!1,mobileFirst:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0,responsive:[{breakpoint:992,settings:"unslick"}]})}),console.log("working-js")},function(e,o,n){}]);