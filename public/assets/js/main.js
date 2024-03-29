(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();

    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $(".fixed-top").addClass("bg-white shadow");
            } else {
                $(".fixed-top").removeClass("bg-white shadow");
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $(".fixed-top").addClass("bg-white shadow").css("top", 0);
            } else {
                $(".fixed-top").removeClass("bg-white shadow").css("top", 0);
            }
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".back-to-top").fadeOut("slow");
        }
    });
    $(".back-to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
        return false;
    });
})(jQuery);
