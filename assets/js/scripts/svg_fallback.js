$(document).ready(function(){
	if (!Modernizr.svg) {
	  $('img[src$=".svg"]').each(function() {
	    //$(this).attr('src', $(this).data('fallback'));
	    return $(this).replace('.svg','.png');
	  });
	}
});