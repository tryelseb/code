//= ../../bower_components/jquery/dist/jquery.js
//= partials/owl.carousel.min.js

$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		items: 5,
		dots: true,
		lazyLoad: true,
		responsive:{
			0:{
				items:1,
				loop:false,
				center:true,
				loop:true,
				autoWidth:true
			},
			784:{
				items:2,
				loop:false,
				center:true,
				loop:true,
				autoWidth:true
			},
			1190:{
				items:3,
				margin:30,
				loop:false,
				center:true,
				loop:true,
				autoWidth:true				
			},
			1527:{
				items:4,
				margin:30,
				loop:false,
				center:true,
				loop:true,
				autoWidth:false		
			}
		}
	});
});





