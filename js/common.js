$(document).ready(function() {

	//Open links in new window
	$("a[rel=external]").each(function(){
		this.target = "_blank";
	});

	//default validate action
	$('form').attr('novalidate',true);

	//printing Icons
	$("a.print").click(function(){
		window.print();
		return false;
	});
	
	$('.flexslider').flexslider({
		animation: "slide",
		controlNav: true,
		directionNav: false
	  });
	  $(".inline").colorbox({inline:true, width:"778px", transition: 'none'});
});
