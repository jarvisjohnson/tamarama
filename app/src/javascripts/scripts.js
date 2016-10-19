/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

$('.renders').slick({
  centerMode: true,
    infinite: true,
  arrows: false,
  variableWidth: true,
  asNavFor: '.renders-text'
});
$('.renders-text').slick({
  asNavFor: '.renders',
    infinite: true,
  arrows: true
});

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

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

function scrollingPattern() {

    var windowHeight = $(window).height();
    var fixedHeight = $('.fixed-wrap').height();
    if(isMobile) {
    $('.fixed-wrap').css('margin-top' , windowHeight);
    }else{};


    $('.intro, #about').height(windowHeight);
    //$( '.intro' ).css('margin-bottom' , fixedHeight);
    $('body').css('height' , getDocHeight());

    // Find the value of 90% of the viewport height
    var ninetypercent = .9 * windowHeight;
    var eightypercent = .80 * windowHeight;
    var fortypercent = .30 * windowHeight;
    if(windowHeight < 400 ){
      var fortypercent = windowHeight;
    }

    if(isMobile) {
    $('#floor-plans .renders .render, .image-section').height(fortypercent);      
    }else{
    $('#floor-plans .renders .render, .image-section').height(eightypercent);      
    }

    // When the document is scrolled ninety percent, toggle the classes
    // Does not work in iOS 7 or below
    // Hasn't been tested in iOS 8
    $(document).scroll(function(){

      
      // Store the document scroll function in a variable
      var y = $(this).scrollTop();   
      
      // If the document is scrolled 90%
      if( y > ninetypercent) {
        
        // Add the "sticky" class
        $('nav').addClass('sticky');
      } else {
        // Else remove it.
        $('nav').removeClass('sticky');
      };
     if(!isMobile) {
        // If the document is scrolled 100%
        if( y < windowHeight ) {
          
          // Add the "sticky" class
          $('.fixed-wrap').addClass('fix');
        } else {
          // Else remove it.
          $('.fixed-wrap').removeClass('fix').css('margin-top' , windowHeight);
          $('body').css('height' , getDocHeight());

        };
      } 

    });
}

// Even when the window is resized, run this code.
$( document ).ready(function() {
  scrollingPattern();
});
window.addEventListener("orientationchange", function() {
  // Announce the new orientation number
  scrollingPattern();
}, false);
if(!isMobile) {
  $(window).resize(function(){
      scrollingPattern();
  });
}
  

