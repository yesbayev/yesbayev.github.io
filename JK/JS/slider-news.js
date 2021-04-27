
// Слайдер Новости и Акции

/* Делаем собственный слайдер на jQuery */

$(function() {	
	var slideNow = 1;
	var slideCount = $('.news-slider-block').children().length;

	$('.news-next').click(nextSlide);
	$('.news-prev').click(prevSlide);

	
	function nextSlide() {
		if (slideNow == 2 || slideNow <=0 || slideNow > slideCount) {
			$('.news-slider-block').css({
				'transform': 'translate(0,0)',
				'-o-transform': 'translate(0,0)',
				'-webkit-transform': 'translate(0,0)'
			});
			slideNow = 1;
		} else {
			var translateWidth = -$('.news-slider').width()	* (slideNow);	
			$('.news-slider-block').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});	
			slideNow++;
		}
	}
	function prevSlide() {
		if (slideNow == 1 || slideNow <=0 || slideNow > slideCount) {
			var translateWidth = -$('.news-slider').width() * (slideCount - 1);
			$('.news-slider-block').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});
			slideNow = slideCount;
		} else {
			var translateWidth = -$('.news-slider').width()	* (slideNow - 2);
			$('.news-slider-block').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});	
			slideNow--;
		}
	}
});	

// Слайдер Новости и Акции