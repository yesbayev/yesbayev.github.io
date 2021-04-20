
//	Слайдер Менежер

$(function() {	
	var slideManagerNow = 1;
	var slideManagerCount = $('.manager-wrapper').children().length;

	$('.manager-next').click(nextManagerSlide);
	$('.manager-prev').click(prevManagerSlide);


	
	function nextManagerSlide() {
		if (slideManagerNow == slideManagerCount || slideManagerNow <=0 || slideManagerNow > slideManagerCount) {
			$('.manager-wrapper').css({
				'transform': 'translate(0,0)',
				'-o-transform': 'translate(0,0)',
				'-webkit-transform': 'translate(0,0)'
			});
			slideManagerNow = 1;
		} else {
			var managerWidth = -$('.manager-viewport').width()	* (slideManagerNow);	
			$('.manager-wrapper').css({
				'transform': 'translate('+managerWidth+'px,0)',
				'-o-transform': 'translate('+managerWidth+'px,0)',
				'-webkit-transform': 'translate('+managerWidth+'px,0)'
			});	
			slideManagerNow++;
		}
	}
	function prevManagerSlide() {
		if (slideManagerNow == 1 || slideManagerNow <=0 || slideManagerNow > slideManagerCount) {
			var managerWidth = -$('.manager-viewport').width() * (slideManagerCount - 1);
			$('.manager-wrapper').css({
				'transform': 'translate('+managerWidth+'px,0)',
				'-o-transform': 'translate('+managerWidth+'px,0)',
				'-webkit-transform': 'translate('+managerWidth+'px,0)'
			});
			slideManagerNow = slideManagerCount;
		} else {
			var managerWidth = -$('.manager-viewport').width()	* (slideManagerNow - 2);
			$('.manager-wrapper').css({
				'transform': 'translate('+managerWidth+'px,0)',
				'-o-transform': 'translate('+managerWidth+'px,0)',
				'-webkit-transform': 'translate('+managerWidth+'px,0)'
			});	
			slideManagerNow--;
		}
	}
});	

//	Слайдер Менежер
