$(document).ready(function(){
	$('body').append('<div id="video_container" class="video-container"></div>');

	$('.video-link').click(function(e) {
	    e.preventDefault();
	    $('body').prepend('<div class="overlay"></div>');
	    $('#video_container').addClass('active').html('<div class="video-wrap"><button type="button" class="close">close</button><div class="video-content" id="video_content"></div></div>');
	  	$('#video_content').html('<iframe src="https://player.vimeo.com/video/133408261?title=1&amp;byline=1&amp;portrait=1&amp;autoplay=true" width="643" height="360" frameborder="0"></iframe>');
	  	$('#video_content').fitVids();
	});

	$(this).on('click', '.close, #video_container', function() {
		$('.overlay').remove();
		$('#video_container').empty().removeClass('active');
	});
});
