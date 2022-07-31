$(document).ready(function() {
	var currentFloor = 2;
	var counterUp = $('.counter-up'); 
	var counterDown = $('.counter-down');
	var floorPath = $('.home-image path');
	var modal = $('.modal');
	var modalCloseButton = $('.modal-close-button');
	var viewFlats = $('.view-flats');
	var currentFlat = 0;
	var flatsPath = $('.flats path').toArray();
	var flatsLinks = $('.flat-link').toArray();
	var menuButton = $('.menu-button');
	var menuPanel = $('.navbar-panel');


	floorPath.on('mouseover', function() {
		currentFloor = $(this).attr('data-floor');
		floorPath.removeClass("current-floor");
		$('.counter').text(currentFloor);
	});



	$(flatsPath).on('mouseover', function(e) {
		var flatPathIndex = flatsPath.indexOf(this);
		showCurrenFlat(flatPathIndex);
	});

	$(flatsLinks).on('mouseover', function(e) {
		var flatLinkIndex = flatsLinks.indexOf(this);
		showCurrenFlat(flatLinkIndex);
	});

	function showCurrenFlat(index) {
	currentFlat = index;

		$('.flats path').removeClass('active')
		$('.flat-link').removeClass('flat-link-active')

		$(flatsLinks[currentFlat]).addClass('flat-link-active');
		$(flatsPath[currentFlat]).addClass('active');
	};



	floorPath.on('click', toggelModal);

	modalCloseButton.on('click', toggelModal);

	viewFlats.on('click', toggelModal);

	counterUp.on('click', function () {
		if (currentFloor < 18) {
			currentFloor++;
			usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, 
			useGroupping: false});
			$('.counter').text(usCurrentFloor);
			floorPath.removeClass("current-floor");
			$(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
		}

	});

	counterDown.on('click', function () {
		if (currentFloor > 2) {
			currentFloor--;
			usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, 
			useGroupping: false});
			$('.counter').text(usCurrentFloor);
			floorPath.removeClass("current-floor");
			$(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
		}

	});

	function toggelModal(){
		modal.toggleClass('is-open');
	};


	menuButton.on('click', function(){
		menuPanel.toggle('slow');
	});









});
