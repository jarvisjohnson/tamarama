/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
//function collapseNavbar() {
    // if ($(".navbar").offset().top > 50) {
    //     $(".navbar-fixed-top").addClass("top-nav-collapse");
    // } else {
    //     $(".navbar-fixed-top").removeClass("top-nav-collapse");
    // }
//}

//$(window).scroll(collapseNavbar);
//$(document).ready(collapseNavbar);

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

$(document).ready(function(){
  
  // Even when the window is resized, run this code.
  $(window).resize(function(){
    
    // Variables
    var windowHeight = $(window).height();
    var fixedHeight = $('.fixed-wrap').height();

    $('.intro, #about').height(windowHeight);
    $( '.intro' ).css('margin-bottom' , fixedHeight);
    $('body').css('height' , getDocHeight());

    // Find the value of 90% of the viewport height
    var ninetypercent = .9 * windowHeight;
    
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

      // If the document is scrolled 100%
      if( y < windowHeight ) {
        
        // Add the "sticky" class
        $('.fixed-wrap').addClass('fix');
      } else {
        // Else remove it.
        $('.fixed-wrap').removeClass('fix').css('margin-top' , windowHeight);
        $('body').css('height' , getDocHeight());

      }

    });

  // Call it on resize.
  }).resize();
  
}); // jQuery