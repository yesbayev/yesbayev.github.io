
// Слайдер Ход Строительство

$(function() {	
	var slideNowBuilding = 1;
	var slideCountBuilding = $('.building-slider-line').length*2;

	$('.building-next').click(nextBuilding);
	$('.building-prev').click(prevBuilding);

	function nextBuilding() {
		if (slideNowBuilding == 2 || slideNowBuilding <=0 || slideNowBuilding > slideCountBuilding) {
			$('.building-slider-line').css({
				'transform': 'translate(0,0)',
				'-o-transform': 'translate(0,0)',
				'-webkit-transform': 'translate(0,0)'
			});
			slideNowBuilding = 1;
		} else {
			var buildingWidth = -$('.viewport').width()	* (slideNowBuilding);	
			$('.building-slider-line').css({
				'transform': 'translate('+buildingWidth+'px,0)',
				'-o-transform': 'translate('+buildingWidth+'px,0)',
				'-webkit-transform': 'translate('+buildingWidth+'px,0)'
			});	
			slideNowBuilding++;
		}
	}
	function prevBuilding() {
		if (slideNowBuilding == 1 || slideNowBuilding <=0 || slideNowBuilding > slideCountBuilding) {
			var buildingWidth = -$('.viewport').width() * (slideCountBuilding - 1);
			$('.building-slider-line').css({
				'transform': 'translate('+buildingWidth+'px,0)',
				'-o-transform': 'translate('+buildingWidth+'px,0)',
				'-webkit-transform': 'translate('+buildingWidth+'px,0)'
			});
			slideNowBuilding = slideCountBuilding;
		} else {
			var buildingWidth = -$('.viewport').width()	* (slideNowBuilding - 2);
			$('.building-slider-line').css({
				'transform': 'translate('+buildingWidth+'px,0)',
				'-o-transform': 'translate('+buildingWidth+'px,0)',
				'-webkit-transform': 'translate('+buildingWidth+'px,0)'
			});	
			slideNowBuilding--;
		}
	}
});	

// Слайдер Ход Строительство