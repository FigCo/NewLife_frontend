$(document).ready(function() {
	
	$('[placeholder]').each(function() {  
		var input = $(this);
					
		$(input).focus(function(){
			if (input.val() == input.attr('placeholder')) {
			   input.val('').removeClass("placeholder");
			}
		});
			
		$(input).blur(function(){
		   if (input.val() == '' || input.val() == input.attr('placeholder')) {
			   input.val(input.attr('placeholder')).addClass("placeholder");
		   }
		});
	}).blur();

});

