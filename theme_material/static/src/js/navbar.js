$(document).ready(function () {

    var ignoredFirst = false,
        navbar = $('header .navbar'),
        offset = $('#oe_main_menu_navbar').height(),
        swapStart = 50 + offset;

    console.log(location.pathname);
    console.log(location.href.indexOf("blog"));
    console.log(location.href.indexOf("contactus"));

    if (location.href.indexOf("blog") || location.href.indexOf("contactus") !== -1) {

        navbar.removeClass('navbar-static-top');
        navbar.addClass('navbar-fixed-top');
        navbar.removeClass('navbar-default');
        navbar.addClass('navbar-transparent');
        navbar.css('margin-top', offset);

        $(window).scroll(function () {
            if (ignoredFirst) {
                if ($(this).scrollTop() > swapStart) {
                    navbar.removeClass('navbar-transparent');
                    navbar.addClass('navbar-default');
                } else if ($(this).scrollTop() < swapStart) {
                    navbar.addClass("navbar-transparent");
                    navbar.removeClass("navbar-default");
                }
            }
            ignoredFirst = true;
        })
    }
});