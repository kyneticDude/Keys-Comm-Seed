   // CONTACT FORM //

$(function() {

	var textAreaVal;
	$("#contact_form textarea[name='comments']") .hover(function() {
		textAreaVal = $(this) .text();
	},
	function() {
	});

	$("#contact_form textarea[name='comments']") .focus(function() {
		if (textAreaVal == 'Message') {
			$(this) .empty();
		}
	});

	$("#contact_form input[name='send']") .click(function() {
        $('#contact_form .form-loader') .show();

        var name = $("#contact_form input[name='name']") .val();
		var surname = $("#contact_form input[name='surname']") .val();
        var email = $("#contact-form input[name='email']") .val();
        var comments = $("#contact-form textarea[name='comments']") .val();

        $.ajax({
            type: 'post',
            url: 'sendEmail.php',
            data: 'name=' + name + 'surname=' + surname + '&email=' + email + '&comments=' + comments,

            success: function(results) {
                $('#contact_form .form-loader') .fadeOut('fast');
                $('ul#response') .hide() .html(results) .slideDown(250);
            }
        });
    });
});