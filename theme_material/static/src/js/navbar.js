$(document).ready(function () {

    var navbar = $('#md-navbar'),
        navbarHeight = navbar.height(),
        offset = $('#oe_main_menu_navbar').outerHeight(),
        wrapwrap = $('#wrapwrap');

    //console.log(offset);
    //console.log(navbarHeight);

    wrapwrap.css('padding-top', offset+navbarHeight);
    navbar.css('margin-top',offset);
    navbar.removeClass('navbar-static-top');
    navbar.addClass('navbar-fixed-top');
});