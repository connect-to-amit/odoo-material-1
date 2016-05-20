$(document).ready(function () {
    if ($(".navbar").offset().top > 30) {
        $('#ag-navbar').addClass('affix');
        $(".navbar-fixed-top").addClass("top-nav-collapse");

        $("#ag-navbar").addClass("navbar-fixed-top");
        $("#ag-navbar").removeClass("navbar-absolute-top");
    } else {
        $('#ag-navbar').removeClass('affix');
        $(".navbar-fixed-top").removeClass("top-nav-collapse");

        $("#ag-navbar").removeClass("navbar-fixed-top");
        $("#ag-navbar").addClass("navbar-absolute-top");
    }

    /*if ($(window).scrollTop() > 0) {
        $('#ag-navbar').addClass('affix');
        $("#ag-navbar").removeClass("navbar-fixed-top");
        $("#ag-navbar").addClass("navbar-absolute-top");

        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $('#ag-navbar').removeClass('affix');
        $("#ag-navbar").addClass("navbar-fixed-top");
        $("#ag-navbar").removeClass("navbar-absolute-top");

        $(".navbar-fixed-top").removeClass("top-nav-collapse");

    }*/
    if (window.location.href.indexOf("detail") > -1 || window.location.href.indexOf("apply") > -1 || window.location.href.indexOf("thankyou") > -1 || window.location.href.indexOf("contactus") > -1 || window.location.href.indexOf("login") > -1 || window.location.href.indexOf("shop") > -1) {
        $('#ag-navbar').addClass('affix');
        $("#ag-navbar").addClass("navbar-fixed-top");
        $("#ag-navbar").removeClass("navbar-absolute-top");
    }
    $(window).scroll(function () {
        if (window.location.href.indexOf("detail") == -1 && window.location.href.indexOf("apply") == -1 && window.location.href.indexOf("thankyou") == -1 && window.location.href.indexOf("contactus") == -1 && window.location.href.indexOf("login") == -1 && window.location.href.indexOf("shop") == -1) {
            if ($(".navbar").offset().top > 30) {
                $('#ag-navbar').addClass('affix');
                $(".navbar-fixed-top").addClass("top-nav-collapse");

                $("#ag-navbar").addClass("navbar-fixed-top");
                $("#ag-navbar").removeClass("navbar-absolute-top");
            } else {
                $('#ag-navbar').removeClass('affix');
                $(".navbar-fixed-top").removeClass("top-nav-collapse");

                $("#ag-navbar").removeClass("navbar-fixed-top");
                $("#ag-navbar").addClass("navbar-absolute-top");
            }
        } else {
            if ($(".navbar").offset().top > 30) {
                $('#ag-navbar').addClass('top-nav-collapse');

            } else {
                $('#ag-navbar').removeClass('top-nav-collapse');
            }
        }

    });
});
