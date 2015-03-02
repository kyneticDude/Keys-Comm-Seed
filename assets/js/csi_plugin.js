$(document).ready(function(){
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
});