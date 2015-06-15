// Signup Marketing scripts go here

var winHeight = $(window).height();

// make sure div stays full width/height on resize
$(window).resize(function(){
	var winHeight = $(window).height();
    $('.slide').not('#browse').css({
	    'height': winHeight,
	});
});


// set initial div height / width
$(document).ready(function(){
    $('.slide').not('#browse').css({
	    'height': winHeight,
	});
});