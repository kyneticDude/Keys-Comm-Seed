$(document).ready(function(){
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