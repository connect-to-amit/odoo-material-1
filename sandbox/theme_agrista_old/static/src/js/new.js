function goFullscreen(id) {
    var element = document.getElementById(id);
    if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    }
}
$(document).ready(function () {
    if ($(window).scrollTop() > 0) {
        $('#bp-nav').addClass('affix');
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $('#bp-nav').removeClass('affix');
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
    if (window.location.href.indexOf("en_US") > -1) {
        $('#name-label').attr('data-content', 'Your Name');
        $('#telephone-label').attr('data-content', 'Telephone');
        $('#email-label').attr('data-content', 'Your Email');
        $('#company-label').attr('data-content', 'Your Company');
        $('#subject-label').attr('data-content', 'Subject');
        $('#message-label').attr('data-content', 'Your inquiry');
        $('#inquiry-label').attr('data-content', 'Short Introduction')
    }
    ;
    if (window.location.href.indexOf("detail") > -1 || window.location.href.indexOf("apply") > -1 || window.location.href.indexOf("thankyou") > -1 || window.location.href.indexOf("crm/contactus") > -1 || window.location.href.indexOf("login") > -1) {
        $('#bp-nav').addClass('affix');
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    }
    ;
    if (window.location.href.indexOf("contactus") > -1) {
        $(document).ready(function () {
            var styles = [{
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{"color": "#000000"}, {"lightness": 17}]
            }, {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{"color": "#000000"}, {"lightness": 20}]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#000000"}, {"lightness": 17}]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#000000"}, {"lightness": 29}, {"weight": 0.2}]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{"color": "#000000"}, {"lightness": 18}]
            }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{"color": "#000000"}, {"lightness": 16}]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{"color": "#000000"}, {"lightness": 21}]
            }, {
                "elementType": "labels.text.stroke",
                "stylers": [{"visibility": "on"}, {"color": "#000000"}, {"lightness": 16}]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [{"saturation": 36}, {"color": "#000000"}, {"lightness": 40}]
            }, {"elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{"color": "#000000"}, {"lightness": 19}]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#000000"}, {"lightness": 20}]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#000000"}, {"lightness": 17}, {"weight": 1.2}]
            }];
            var options = {
                mapTypeControlOptions: {mapTypeIds: ['Styled']},
                center: new google.maps.LatLng(52.1186042, 11.6273013, 17),
                zoom: 16,
                disableDefaultUI: true,
                mapTypeId: 'Styled'
            };
            var div = document.getElementById('googlemaps');
            var map = new google.maps.Map(div, options);
            var marker = new google.maps.Marker({
                map: map,
                draggable: false,
                animation: google.maps.Animation.DROP,
                position: new google.maps.LatLng(52.1186042, 11.6273013, 17),
                icon: '/bloopark/static/src/img/bp_pin1.png'
            });
            var styledMapType = new google.maps.StyledMapType(styles, {name: 'Styled'});
            map.mapTypes.set('Styled', styledMapType);
        })
    }
    $(window).scroll(function () {
        if (window.location.href.indexOf("detail") == -1 && window.location.href.indexOf("apply") == -1 && window.location.href.indexOf("thankyou") == -1 && window.location.href.indexOf("crm/contactus") == -1 && window.location.href.indexOf("login") == -1) {
            if ($(".navbar").offset().top > 50) {
                $('#bp-nav').addClass('affix');
                $(".navbar-fixed-top").addClass("top-nav-collapse");
            } else {
                $('#bp-nav').removeClass('affix');
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
            }
        }
    });
    var wow = new WOW({boxClass: 'wow', animateClass: 'animated', offset: 30, mobile: false, live: true});
    wow.init();
    if (/mobile/i.test(navigator.userAgent)) {
        document.documentElement.className += ' mobile';
    }
    $(window).resize(function () {
        resize();
    });
    $('#cover').css({'background-size': 'cover', 'background-position': 'center',});
    resize();
    function resize() {
        var $div = $('#cover');
        if (($(window).width() / $(window).height()) < ($('video').width() / $('video').height())) {
            $('#cover').css({'height': 'auto', 'width': 'auto'});
        } else {
            $('#cover').css({'width': 'auto', 'height': $(window).height() + 'px'});
        }
    }

    $(document).ready(function () {
        var autoPlayVideo = true;
        if ($(window).width() <= 1024) {
            autoPlayVideo = false;
        }
        HeaderVideo.init({
            container: $('.header-video'),
            header: $('.header-video--media'),
            videoTrigger: $("#video-trigger"),
            autoPlayVideo: autoPlayVideo
        });
    });
    $(".hex-mask").hover(function () {
        if ($(this).children("video").length) {
            var $video = $(this).children("video");
            $(this).children("img").hide();
            if ($video.get(0).ended)$video.get(0).load();
            $video.show().get(0).play();
        }
    }, function () {
        if ($(this).children("video").length) {
            $(this).children("img").show();
            $(this).children("video").hide().get(0).pause();
        }
    });
    $(document).scroll(function () {
    });
    $('a[href*=#]').each(function (index) {
        if ($('a[href*=#]').eq(index).hasClass('carousel-control') || $('a[href*=#]').eq(index).hasClass('no-animate-link')) {
            return false;
        }
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname && this.hash.replace(/#/, '')) {
            var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) + ']');
            var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
            if ($target) {
                var targetOffset = $target.offset().top;
                $(this).click(function () {
                    $('html, body').animate({scrollTop: targetOffset}, 400);
                    return false;
                });
            }
        }
    });
    $(document).on("scroll", onScroll);
    $('#side-navigation a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
        var target = this.hash, menu = target;
        $target = $(target);
        $('html, body').stop().animate({'scrollTop': $target.offset().top + 2}, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});
function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    if (scrollPos > 500) {
        $('#side-navigation').fadeIn();
    } else {
        $('#side-navigation').fadeOut();
    }
    $('#side-navigation a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#side-navigation ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
};