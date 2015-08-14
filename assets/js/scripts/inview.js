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