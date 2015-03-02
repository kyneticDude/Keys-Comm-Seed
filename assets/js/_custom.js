$(document).ready(function() {
	// TOGGLE FUNCTION //
	$('#toggle-view li').click(function () {
        var text = $(this).children('div.panel');
        if (text.is(':hidden')) {
            text.slideDown('200');
            $(this).children('span').addClass('toggle-minus');     
            $(this).addClass('activated');     
        } else {
            text.slideUp('200');
			$(this).children('span').removeClass('toggle-minus'); 
            $(this).children('span').addClass('toggle-plus'); 
			$(this).removeClass('activated'); 			
        }
         
    });

    /*----------------------------------------------------------*/
     /*FLEX SLIDER*/
     /*----------------------------------------------------------*/
     if ( $( '.flexslider' ).length && jQuery() ) { 
            var target_flexslider = $('.flexslider');
            target_flexslider.flexslider({
            animation:"fade",
            controlNav: true,
            directionNav: true, 
            slideshowSpeed: 4000
        });
    }

    $('.testi').flexslider({
                animation:"slide",
                easing:"swing",
                controlNav: true, 
                reverse:true,
                smoothHeight:false,
                directionNav: false, 
                controlsContainer: '.testi-container',
                slideshowSpeed: 9000,
                slideshow: false
    });

    /*===========================================================*/
    /*  FancyBox & toTop
    /*===========================================================*/ 
    $(".fancybox").fancybox({
        openEffect  : 'none',
        closeEffect : 'none'
    });
    
    $('a[data-rel]').each(function() {
        $(this).attr('rel', $(this).data('rel'));
    });


});
