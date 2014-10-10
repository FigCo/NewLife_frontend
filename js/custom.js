$(document).ready(function() {
		 $('.submit').click(function(event){
				 event.preventDefault();
				$('.searchBox').toggle();
				$('#background').toggle();
				$('.headerMainNav li > form').toggleClass('activeArrow');
			});
			$('#background').click(function(){
				$('.searchBox').hide();
				$('#background').hide();
				$('.headerMainNav li > form').removeClass('activeArrow');
			});
			$('.submit').click(function(){
				$('.searchBox').css({'top':'0'});
			});
			$('.mobIcon > a').click(function(event){
				event.preventDefault();
				$('.moblieNav').slideToggle();

			});
			$('.locationSelectbox').click(function(){
				$('.locationDropDown').slideToggle();

			});
			$('.locationSelectbox1').click(function(){
				$('.locationDropDown1').slideToggle();

			});
			$('.locationSelectbox2').click(function(){
				$('.locationDropDown2').slideToggle();

			});

			/*  Tabs -------------------------------*/
			$('#tabs-wrapper a').click(function(e) {
				if ($(this).hasClass('current')){
				return false;
				}
				id = $(this).attr('href');
				$('#tabs-wrapper a').removeClass('current');
				$(this).addClass('current');

				$('#tabs-content > div.active').fadeOut(0).removeClass('active');
				$(id).fadeIn('fast').addClass('active');
				e.preventDefault();
			});

		/* Effects--------------------------------------------*/

			jQuery.easing.def = 'easeOutBounce';
			// $('<div id="controls">').appendTo('#examples');
			var sel1 = $("<select>").appendTo('#controls');
			for (x in jQuery.easing)
			{
				if (x != 'linear' && x != 'swing')
					sel1.append($('<option>').attr('value', x).text(x));
			}
			sel2 = sel1.clone().appendTo('#controls');
			sel1.val('easeInOutCirc');
			sel2.val('easeOutBounce');
			$(".toggle").click(function(e){
				e.preventDefault();
				this.blur();
				// var el = $('#' + this.href.split('#')[1]);
				var method1 = sel1.val();
				var method2 = sel2.val();
				$('.example').animate({'top':'0'}, {duration: 50, easing: method1}).animate({'top':'103px'}, {duration: 1000, easing: method2});
			});

			if($('body').width() > 600){
				jQuery.easing.def = 'easeOutBounce';
				// $('<div id="controls">').appendTo('#examples');
				var sel1 = $("<select>").appendTo('#controls');
				for (x in jQuery.easing)
				{
					if (x != 'linear' && x != 'swing')
						sel1.append($('<option>').attr('value', x).text(x));
				}
				sel2 = sel1.clone().appendTo('#controls');
				sel1.val('easeInOutCirc');
				sel2.val('easeOutBounce');
				$(".toggle2").click(function(e){
					e.preventDefault();
					this.blur();
					// var el = $('#' + this.href.split('#')[1]);
					var method1 = sel1.val();
					var method2 = sel2.val();
					$('.example').animate({'top':'0'}, {duration: 50, easing: method1}).animate({'top':'105px'}, {duration: 1000, easing: method2});
				});
			}

			if($('body').width() <= 600){
				jQuery.easing.def = 'easeOutBounce';
				// $('<div id="controls">').appendTo('#examples');
				var sel1 = $("<select>").appendTo('#controls');
				for (x in jQuery.easing)
				{
					if (x != 'linear' && x != 'swing')
						sel1.append($('<option>').attr('value', x).text(x));
				}
				sel2 = sel1.clone().appendTo('#controls');
				sel1.val('easeInOutCirc');
				sel2.val('easeOutBounce');
				$(".toggle2").click(function(e){
					e.preventDefault();
					this.blur();
					// var el = $('#' + this.href.split('#')[1]);
					var method1 = sel1.val();
					var method2 = sel2.val();
					$('.example').animate({'top':'0'}, {duration: 50, easing: method1}).animate({'top':'159px'}, {duration: 1000, easing: method2});
				});
			}
	});
