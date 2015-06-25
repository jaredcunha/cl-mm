$(document).ready(function(){
  $('#decideDiscountAnimation').addClass("in-view");
  $('#decideDiscountAnimation, #guestsAnimation, #staffAnimation, #reportAnimation').bind('inview', function (event, visible) {
    if (visible === true) {
      $(this).addClass("in-view");
    } else {
      $(this).removeClass("in-view");
    }
  });
  
});


$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       setTimeout(function(){
		  $('.faq').addClass("in-view");
		}, 750);
   }
});