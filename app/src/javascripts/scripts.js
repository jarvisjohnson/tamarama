var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
var $slider = $('.renders')
        .on('init', function(slick) {
            console.log('fired!');
            $('.renders').fadeIn(3000);
        })
        .slick({
          centerMode: true,
          infinite: true,
          arrows: false,
          variableWidth: true,
          asNavFor: '.renders-text'
});
$('.render').addClass('initialized');
$('.renders-text').slick({
    asNavFor: '.renders',
    infinite: true,
    arrows: true
});

if (!isMobile) {

    $("#contact form input").after("<span class='after'>|</span>").before("<span class='before'>|</span>");

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $(this).closest('.collapse').collapse('toggle');
    });

}

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

function scrollingPattern() {

    var windowHeight = ($(window).height() + 1);
    var fixedHeight = $('.fixed-wrap').height();
    if (isMobile) {
        $('.fixed-wrap').css('margin-top', windowHeight);
    } else {};


    $('.intro, #about').height(windowHeight);
    //$( '.intro' ).css('margin-bottom' , fixedHeight);
    $('body').css('height', getDocHeight());

    // Find the value of 90% of the viewport height
    var ninetypercent = .90 * windowHeight;
    var eightypercent = .80 * windowHeight;
    var seventypercent = .68 * windowHeight;
    var fortypercent = .40 * windowHeight;
    if (windowHeight < 400) {
        var fortypercent = windowHeight;
    }

    if (isMobile) {
        $('#floor-plans .renders .render img, .image-section').height(fortypercent);
    } else {
        $('#floor-plans .renders .render img').height(eightypercent);
        $('.image-section').height(seventypercent);
    }

    // When the document is scrolled ninety percent, toggle the classes
    // Does not work in iOS 7 or below
    // Hasn't been tested in iOS 8
    $(document).scroll(function() {


        // Store the document scroll function in a variable
        var y = $(this).scrollTop();

        // If the document is scrolled 90%
        if (y > ninetypercent) {

            // Add the "sticky" class
            $('nav').addClass('sticky');
        } else {
            // Else remove it.
            $('nav').removeClass('sticky');
        };
        if (!isMobile) {
            // If the document is scrolled 100%
            if (y < windowHeight) {

                // Add the "sticky" class
                $('.fixed-wrap').addClass('fix');
            } else {
                // Else remove it.
                $('.fixed-wrap').removeClass('fix').css('margin-top', windowHeight);
                $('body').css('height', getDocHeight());

            };
        }

    });
}

// Even when the window is resized, run this code.
$(document).ready(function() {
    scrollingPattern();
});
window.addEventListener("orientationchange", function() {
    scrollingPattern();
});
if (!isMobile) {
    $(window).resize(function() {
        scrollingPattern();
    });
}
if (!isMobile) {
  $(document).ready(function() {  
    var poolHeight = $('#pool').height();
    $('#coffee').height(poolHeight);
    $('.orchard-st').css('position', 'absolute');
  });
}

(function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function(partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

})(jQuery);

$(window).scroll(function(event) {

    $(".below-renders").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            $('.navbar-fixed-bottom').addClass("hide");
        } else {
            $('.navbar-fixed-bottom').removeClass("hide");
        }
    });

});