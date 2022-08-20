
$(document).ready(function () {
	$(".slider_slick").slick({
		arrows:false,
		dots: true,
  		//centerMode: true,
  		slidesToShow: 3,
  		slidesToScroll: 1, 
  		autoplay: true,
  		autoplaySpeed: 1500,
  		infinite: true,
  		//centerPadding:10,
  		responsive: [
    	{
         	breakpoint: 800,
      			settings: {
        					slidesToShow: 2,
      						}
    	},
    	{
      		breakpoint: 500,
      			settings: {
       						 slidesToShow: 1,
 							 }
    	}
  		]	
	});
});
