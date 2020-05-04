/*jslint browser: true*/
/*global $, jQuery*/
/* Ignore errors by JSLint. */

/* Ensures that this code is run only after document has been loaded. */
$(document).ready(function () {
    
    /* For sticky navigation */
    /* Waypoint is JS script that triggers f based on scroll. Added script in index.html */
    $('.js--section-features').waypoint(function (direction) {
        /* Can detect whether user is scrolling up/down with parameter 'direction'. */
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        /* Happens 60px before we hit '.js--section-features' div.*/
        offset: '60px'
    });
    
    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        /* Scroll to top of '.js--section-plans' on click of '.js--scroll-to-plans'. */
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function () {
        /* Scroll to top of '.js--section-features' on click of '.js--scroll-to-start'. */
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    
    /* Navigation scroll */
    $(function() {
        /* Select link ele. where href attr starts with # symbol. On click...*/
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
              /*  If ele. exists, animate html body, scrolling to top of section. */
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function (direction) {
        /* fadeIn on features section */
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function (direction) {
        /* fadeInUp iphone image on steps section */
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function (direction) {
        /* fadeIn on cities section */
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function (direction) {
        /* pulse first item on plans section */
        /* No need to add 'opacity' CSS attr in style.css for pulse animation!! */
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    
    /* Mobile nav */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon');
        
        /* slideToggle: jQuery method that opens/closes a box; */ 
        /* takes duration of animation (millisecond) as argument. */
        nav.slideToggle(200);
        
        if (icon.attr('name') == 'menu') {
            icon.removeAttr('name');
            icon.attr('name', 'close');
        } else {
            icon.removeAttr('name');
            icon.attr('name', 'menu');
        }
    });
});