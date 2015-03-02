$(function() {
	$("#media-pager").paginate({
		count 		: 10,
		start 		: 1,
		display     : 7,
		border					: true,
		border_color			: '#fff',
		text_color  			: '#fff',
		background_color    	: 'black',	
		border_hover_color		: '#ccc',
		text_hover_color  		: '#000',
		background_hover_color	: '#fff', 
		images					: false,
		mouse					: 'press',
		onChange     			: function(page){
									$('._current','#paginate').removeClass('_current').hide();
								  }
	});
    
});