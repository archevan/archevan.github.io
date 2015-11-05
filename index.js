$(document).ready(function() {
	$('img, h2, p, blockquote, i').hide();

	$('.button').on('click', function() {
		$(this).fadeOut();
		$('.box').css('height', 'intrinsic');
		$('img, h2, p, blockquote, i').fadeIn();
		$('.pure-u-1-3').css('margin-top', '0px');
	});
	$('i').on('click', function() {
		swal({
		   title: "Are you sure?",   
		   text: "He is the only user on this site. You might be alone forever! Are you sure that you want to refuse this opportunity?",   
		   type: "warning",   
		   showCancelButton: true,   
		   confirmButtonColor: "#DD6B55",   
		   confirmButtonText: "Yes, He's Gross!",   
		   closeOnConfirm: true
		}, 
		   function(){   
		   	$('.box').css('height', '300px');
			$('img, h2, p, blockquote, i').fadeOut();
			$('.button').fadeIn();
			$('.pure-u-1-3').css('margin-top', '50px');
		   });
	});
});