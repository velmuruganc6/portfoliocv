/*
Template Name: Velmurugan / CV Template
Template URI: https://velmurugan-ui.000webhostapp.com/
Description: Velmurugan for resume / cv / portfolio template
Author: Velmurugan
Author URL: https://velmurugan-ui.000webhostapp.com/
Version: 1.0
*/

/*================================================
 [  Table of contents  ]
 ================================================
 :: Preloader
 :: Site Header
 :: Page loader
 :: Typing Text
 :: Text rotation
 :: Home Slider
 :: Portfolio Filter
 :: Magnific Popup
 :: WOW Animation
 ======================================
 [ End table content ]
 ======================================*/

jQuery(document).ready(function () {
    "use strict";

    /*======================================
     Site Header
     ======================================*/
    $('#header-main-menu li a, .home-buttons a').on("click", function (e) {
        if ($(e.target).is('.header-main-menu a, .home-buttons a')) {
            $('.header-main-menu li a').removeClass('active');
            $(this).addClass('active');
            $(".sub-page").hide();
            if (location.pathname.replace(/^\//, '') == e.target.pathname.replace(/^\//, '') && location.hostname == e.target.hostname) {
                var target = $(e.target.hash);
                target = target.length ? target : $('[name=' + e.target.hash.slice(1) + ']');
                if (target.length) {
                    var gap = 0;
                    $(e.target.hash, 'html', 'body').animate({
                        opacity: 'show',
                        duration: "slow",
                        scrollTop: target.offset().top - gap
                    });
                }
            }
            if ($(e.target).is('.home-buttons a')) {
                $("#header-main-menu li a[href='#contact']").addClass('active');
            }
        }
    });


    /*************************
     Responsive Menu
     *************************/
    $('.responsive-icon').on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.header').animate({ 'margin-left': 285 }, 300);
        } else {
            $(this).removeClass('active');
            $('.header').animate({ 'margin-left': 0 }, 300);
        }
        return false;
    });

    $('.header a').on("click", function (e) {
        $('.responsive-icon').removeClass('active');
        $('.header').animate({ 'margin-left': 0 }, 300);

    });
    /*======================================
     Typing Text
     ======================================*/
    $(".typed").typed({
        stringsElement: $('.typed-strings'),
        typeSpeed: 20,
        backDelay: 500,
        loop: true,
        autoplay: true,
        autoplayTimeout: 500,
        contentType: 'html',
        loopCount: true,
        resetCallback: function () {
            newTyped();
        }
    });


    /*======================================
     Text rotation
     ======================================*/
    $('.text-rotation').owlCarousel({
        dots: !1,
        nav: !1,
        margin: 0,
        items: 1,
        autoplay: true,
        autoplayHoverPause: !1,
        autoplayTimeout: 1000,
        loop: true,
        animateOut: 'zoomOut',
        animateIn: 'zoomIn'
    });

    /*======================================
     Home Slider
     ======================================*/
    $('.home-slides').owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false
    });

    /*======================================
     Portfolio Filter
     ======================================*/
    $(function () {
        var selectedClass = "";
        $(".filter-tabs").find('button:first-child').addClass('active-filter');
        $(".fil-cat").click(function () {
            $(".filter-tabs").find('button').removeClass('active-filter');
            $(this).addClass('active-filter');
            selectedClass = $(this).attr("data-rel");
            $("#portfolio-page").fadeTo(100, 0.1);
            $("#portfolio-page .portfolio-item").not("." + selectedClass).fadeOut().removeClass('portfolio-item');
            setTimeout(function () {
                $("." + selectedClass).fadeIn().addClass('portfolio-item');
                $("#portfolio-page").fadeTo(300, 1);
            }, 300);

        });
    });

    /*======================================
    Magnific Popup
    ======================================*/
    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /*======================================
     WOW Animation
     ======================================*/
    new WOW().init();

    /*======================================
    Dark Mode
    ======================================*/
    $(".dark-mode").on("click", function () {
        if (!$("body").hasClass("dark")) {
            $("body").addClass("dark");
        } else {
            $("body").removeClass("dark");
        }
    });

    $(".dark-mode").click(function () {
        $(this).find("i").toggleClass("fa-sun-o fa-moon-o");
    });

    /*======================================
     Preloader
     ======================================*/
    $('#preloader').fadeOut('slow', function () {
        $(this).remove();
    });
});
