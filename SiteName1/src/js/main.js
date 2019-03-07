//= ../../bower_components/jquery/dist/jquery.js
//= partials/owl.carousel.min.js

$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		center: true,
		items: 3,
		loop:true,
		navigation: true,
		margin: 30,
		responsive:{
			600:{
				items:4
			}
		}
	});
});





