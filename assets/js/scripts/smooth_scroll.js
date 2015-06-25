/* ===================================
Smooth Scrolling Function
======================================*/
$(function() {
  $('a[href*=#]:not([href=#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function(){
  if( $('.contact-form').find('p.errors').length ) {
    var target = $(this.hash);
      target = $("#pardot-form1");
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
  }
});