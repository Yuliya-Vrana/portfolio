$(document).ready(function () {
	$(".slider_slick").slick({
		arrows:true,
		dots: true,
  		slidesToShow: 4,
  		slidesToScroll: 1, 
  		//autoplay: true,
  		//autoplaySpeed: 2000,
  		//infinite: true,
        responsive: [
        {
      breakpoint: 1200,
      settings: {
          slidesToShow: 3
      }
    },

    {
      breakpoint: 961,
      settings: {
          slidesToShow: 2
      }
    },
    {
      breakpoint: 661,
      settings: {
        slidesToShow: 1
      }
    }
  ]
	});
});

