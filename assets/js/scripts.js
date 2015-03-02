$(function() {
    // ACTIVE LINK HIGHLIGHT
        var str=location.href.toLowerCase();
        
        $(".nav a").each(function() {
        
        if (str.indexOf(this.href.toLowerCase()) > -1) {
        
         $("li.selected").removeClass("selected");
        
        $(this).parent().addClass("selected");
        
        }

    
	
	
	/***************************************************
		LIGHTBOX JAVASCRIPT
	***************************************************/
    $(function() {
    // Use this example, or...
    $('a[@rel*=lightbox]').lightBox(); // Select all links that contains lightbox in the attribute rel
    // This, or...
    $('#media-main-pic a').lightBox(); // Select all links in object with gallery ID
    // This, or...
    $('a.lightbox').lightBox(); // Select all links with lightbox class
    // This, or...
    $('a').lightBox(); // Select all links in the page
    // ... The possibility are many. Use your creative or choose one in the examples above
	});
});  
