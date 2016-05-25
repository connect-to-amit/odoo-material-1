$(document).ready(function () {

    var navbar = $('header .navbar'),
        offset = $('#oe_main_menu_navbar').height();

    console.log(offset);

    //navbar.css('margin-top', offset);
    navbar.css('margin-top', 0);

});