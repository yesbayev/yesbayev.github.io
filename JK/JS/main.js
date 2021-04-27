// menu
// function openMenu() {
//     document.getElementById("sidebar").classList.toggle('active');
// }


$(function () {
	$(".toggle-btn").click(function () { 
		document.getElementById("sidebar").classList.toggle('active');
	});

	$("li a").click(function (event) {
		event.preventDefault();
		var target = $(this).attr('href');
		var top = $(target).offset().top;
		$('html,body').animate({scrollTop: top}, 500)
	})
});


// $(".toggle-btn").mouseenter(function () { 
//     document.getElementById("sidebar").classList.toggle('active');
// });
// menu


// Слайдер главный страница
/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("main-center-slider");
  
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}
// Слайдер главный страница



// Тabs
// поиск элементов tab
const tabsBtn   = document.querySelectorAll(".tabs__nav-btn")
const tabsItems = document.querySelectorAll(".tabs__item")

tabsBtn.forEach(onTabClick);
// главная function
function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab")
        let currentTab = document.querySelector(tabId)

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active')
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active')
            });
    
            currentBtn.classList.add('active')
            currentTab.classList.add('active')
        }
    });
}

document.querySelector('.tabs__nav-btn').click()
// Tabs




// Тabs Ползунок
const tabsApartmentBtn = document.querySelectorAll(".tabs-apartment-btn")
const ApartmentTabs = document.querySelectorAll(".wrap-pick-apartment-tabs")

tabsApartmentBtn.forEach(onTabApartmentClick);
// главная function
function onTabApartmentClick(apartment) {
    apartment.addEventListener("click", function() {
        let currentApartmentBtn = apartment;
        let tabApartmentId = currentApartmentBtn.getAttribute("data-tab")
        let currentApartmentTab = document.querySelector(tabApartmentId)

        if( ! currentApartmentBtn.classList.contains('active') ) {
            tabsApartmentBtn.forEach(function(apartment) {
                apartment.classList.remove('active')
            });
    
            ApartmentTabs.forEach(function(apartment) {
                apartment.classList.remove('active')
            });
    
            currentApartmentBtn.classList.add('active')
            currentApartmentTab.classList.add('active')
        }
    });
}

document.querySelector('.tabs-apartment-btn').click()
// Tabs Ползунок     



// Ползунок
//Студия
//  1
let sliderCostStudio = document.getElementById("slider-cost-studio")
let inputCostStudio = document.getElementById("input-cost-studio")

function StudioCostInput(){
    sliderCostStudio.value = inputCostStudio.value
}

inputCostStudio.addEventListener("change",StudioCostInput)


function StudioCostSlider(){
    inputCostStudio.value = sliderCostStudio.value
}

sliderCostStudio.addEventListener("change",StudioCostSlider)
//  1


//  2
let sliderSquareStudio=document.getElementById("slider-square-studio")
let inputSquareStudio=document.getElementById("input-square-studio")

function StudioSquareInput(){
    sliderSquareStudio.value=inputSquareStudio.value
}

inputSquareStudio.addEventListener("change",StudioSquareInput)

function StudioSquareSlider(){
    inputSquareStudio.value=sliderSquareStudio.value
}

sliderSquareStudio.addEventListener("change",StudioSquareSlider)
//  2


//  3
let sliderFloorStudio=document.getElementById("slider-floor-studio")
let inputFloorStudio=document.getElementById("input-floor-studio")

function StudioFloorInput(){
    sliderFloorStudio.value=inputFloorStudio.value
}

inputFloorStudio.addEventListener("change",StudioFloorInput)

function StudioFloorSlider(){
    inputFloorStudio.value=sliderFloorStudio.value
}

sliderFloorStudio.addEventListener("change",StudioFloorSlider)
//  3
//Студия


//  1 комнатная
//  1
let sliderCostApartment_1=document.getElementById("slider-cost-apartment-1")
let inputCostApartment_1=document.getElementById("input-cost-apartment-1")

function ApartmentCostInput_1(){
    sliderCostApartment_1.value=inputCostApartment_1.value
}

inputCostApartment_1.addEventListener("change",ApartmentCostInput_1)

function ApartmentCostSlider_1(){
    inputCostApartment_1.value=sliderCostApartment_1.value
}

sliderCostApartment_1.addEventListener("change",ApartmentCostSlider_1)
//  1


//  2
let sliderSquareApartment_1=document.getElementById("slider-square-apartment-1")
let inputSquareApartment_1=document.getElementById("input-square-apartment-1")

function ApartmentSquareInput_1(){
    sliderSquareApartment_1.value=inputSquareApartment_1.value
}

inputSquareApartment_1.addEventListener("change",ApartmentSquareInput_1)

function ApartmentSquareSlider_1(){
    inputSquareApartment_1.value=sliderSquareApartment_1.value
}

sliderSquareApartment_1.addEventListener("change",ApartmentSquareSlider_1)
//  2


//  3
let sliderFloorApartment_1=document.getElementById("slider-floor-apartment-1")
let inputFloorApartment_1=document.getElementById("input-floor-apartment-1")

function ApartmentFloorInput_1(){
    sliderFloorApartment_1.value=inputFloorApartment_1.value
}

inputFloorApartment_1.addEventListener("change",ApartmentFloorInput_1)

function ApartmentFloorSlider_1(){
    inputFloorApartment_1.value=sliderFloorApartment_1.value
}

sliderFloorApartment_1.addEventListener("change",ApartmentFloorSlider_1)
//  3
//  1 комнатная


//  2 комнатная
//  1
let sliderCostApartment_2=document.getElementById("slider-cost-apartment-2")
let inputCostApartment_2=document.getElementById("input-cost-apartment-2")

function ApartmentCostInput_2(){
    sliderCostApartment_2.value=inputCostApartment_2.value
}

inputCostApartment_2.addEventListener("change",ApartmentCostInput_2)

function ApartmentCostSlider_2(){
    inputCostApartment_2.value=sliderCostApartment_2.value
}

sliderCostApartment_2.addEventListener("change",ApartmentCostSlider_2)
//  1


//  2
let sliderSquareApartment_2=document.getElementById("slider-square-apartment-2")
let inputSquareApartment_2=document.getElementById("input-square-apartment-2")

function ApartmentSquareInput_2(){
    sliderSquareApartment_2.value=inputSquareApartment_2.value
}

inputSquareApartment_2.addEventListener("change",ApartmentSquareInput_2)

function ApartmentSquareSlider_2(){
    inputSquareApartment_2.value=sliderSquareApartment_2.value
}

sliderSquareApartment_2.addEventListener("change",ApartmentSquareSlider_2)
//  2


//  3
let sliderFloorApartment_2=document.getElementById("slider-floor-apartment-2")
let inputFloorApartment_2=document.getElementById("input-floor-apartment-2")

function ApartmentFloorInput_2(){
    sliderFloorApartment_2.value=inputFloorApartment_2.value
}

inputFloorApartment_2.addEventListener("change",ApartmentFloorInput_2)

function ApartmentFloorSlider_2(){
    inputFloorApartment_2.value=sliderFloorApartment_2.value
}

sliderFloorApartment_2.addEventListener("change",ApartmentFloorSlider_2)
//  3
//  2 комнатная


//  3 комнатная
//  1
let sliderCostApartment_3=document.getElementById("slider-cost-apartment-3")
let inputCostApartment_3=document.getElementById("input-cost-apartment-3")

function ApartmentCostInput_3(){
    sliderCostApartment_3.value=inputCostApartment_3.value
}

inputCostApartment_3.addEventListener("change",ApartmentCostInput_3)

function ApartmentCostSlider_3(){
    inputCostApartment_3.value=sliderCostApartment_3.value
}

sliderCostApartment_3.addEventListener("change",ApartmentCostSlider_3)
//  1


//  2
let sliderSquareApartment_3=document.getElementById("slider-square-apartment-3")
let inputSquareApartment_3=document.getElementById("input-square-apartment-3")

function ApartmentSquareInput_3(){
    sliderSquareApartment_3.value=inputSquareApartment_3.value
}

inputSquareApartment_3.addEventListener("change",ApartmentSquareInput_3)

function ApartmentSquareSlider_3(){
    inputSquareApartment_3.value=sliderSquareApartment_3.value
}

sliderSquareApartment_3.addEventListener("change",ApartmentSquareSlider_3)
//  2


//  3
let sliderFloorApartment_3=document.getElementById("slider-floor-apartment-3")
let inputFloorApartment_3=document.getElementById("input-floor-apartment-3")

function ApartmentFloorInput_3(){
    sliderFloorApartment_3.value=inputFloorApartment_3.value
}

inputFloorApartment_3.addEventListener("change",ApartmentFloorInput_3)

function ApartmentFloorSlider_3(){
    inputFloorApartment_3.value=sliderFloorApartment_3.value
}

sliderFloorApartment_3.addEventListener("change",ApartmentFloorSlider_3)
//  3
//  3 комнатная




// Ползунок




// Слайдер планов
const wrapBlock = document.querySelectorAll('.wrap-slider .population-big-wrap img');
const populationSlider = document.querySelector('.population-big-wrap');
// const wrapBlock = document.querySelectorAll('.wrap-slider .population-image-400 img');
// const populationSlider = document.querySelector('.population-image-400');

let wrapCount = 0;
let wrapWidth;

function wrap_init(){
    wrapWidth = document.querySelector('.population-big-wrap').offsetWidth;
    // wrapWidth = document.querySelector('.population-image-400').offsetWidth;

    populationSlider.style.wrapWidth = wrapWidth * wrapBlock.length + 'px';
    wrapBlock.forEach( item => {
        item.style.wrapWidth = wrapWidth + 'px';
        item.style.height = 'auto';
    });
    wrap_rollslider();
}

window.addEventListener('size', wrap_init);
wrap_init();


document.querySelector('.population-prev').addEventListener('click', function(){
    wrapCount--;
    if (wrapCount < 0) {
        wrapCount = wrapBlock.length -1;
    }
    wrap_rollslider();
});

document.querySelector('.population-next').addEventListener('click', function(){
    wrapCount++;
    if (wrapCount >= wrapBlock.length) {
        wrapCount = 0;
    }
    wrap_rollslider();
});

function wrap_rollslider(){
    populationSlider.style.transform = 'translate(-'+wrapCount*wrapWidth+'px)';
}
// Слайдер планов


// Слайдер площадок
// Получить изображение
const images = document.querySelectorAll('.enjoy-slider .slider-line img');
const sliderLine = document.querySelector('.slider-line');

//Переменные для функции
let count = 0;
let width;

function init(){
    // Узнать ширину слайдера
    width = document.querySelector('.enjoy-slider').offsetWidth;

    // Ширину слайдера умножить на количества картинок
    sliderLine.style.width = width * images.length + 'px';

    // Перебрать все картинки на ширину и высоту слайдера
    images.forEach( item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollslider();
}

window.addEventListener('resize', init);
init();

// кнопнки листания
document.querySelector('.enjoy-prev').addEventListener('click', function(){
    count--;
    // Условие для возврата в начала слайда
    if (count < 0) {
        count = images.length -1;
    }
    rollslider();
});

document.querySelector('.enjoy-next').addEventListener('click', function(){
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollslider();
});

// Динамический изменяет размер слайдера при изменении размера экрана
function rollslider(){
    sliderLine.style.transform = 'translate(-'+count*width+'px)';
}
// Слайдер площадок



// Слайдер Безопасность и доступность
/* Индекс слайда по умолчанию */
let safetySlideIndex = 1;
safetyShowSlides(safetySlideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function safetyPlusSlide() {
    safetyShowSlides(safetySlideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function safetyMinusSlide() {
    safetyShowSlides(safetySlideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function safetyCurrentSlide(n) {
    safetyShowSlides(safetySlideIndex = n);
}

/* Основная функция слайдера */
function safetyShowSlides(n) {
    let i;
    let slides = document.getElementsByClassName("safety-slider");
  
    if (n > slides.length) {
        safetySlideIndex = 1
    }
    if (n < 1) {
        safetySlideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[safetySlideIndex - 1].style.display = "block";
}
// // Слайдер Безопасность и доступность




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



//  Select
document.querySelector('.building-select').addEventListener('click', () => {
    let data = document.querySelector('.building-select').value;
    document.querySelector('.out-10').innerHTML = data;
    // document.querySelector('.s-10').value = 'winamp';
});
//  Select




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



// Метки
// поиск элементов tab
const markerBtn   = document.querySelectorAll(".marker")
const month_1 = document.querySelectorAll(".month")

markerBtn.forEach(onMarkerClick);
// главная function
function onMarkerClick(item) {
    item.addEventListener("click", function() {
        let currentMarkerBtn = item;
        let currentMarkerTab = item;
        // let tabId = currentMarkerBtn.getAttribute("data-tab")
        // let currentTab = document.querySelector(tabId)

        if( ! currentMarkerBtn.classList.contains('active') ) {
            markerBtn.forEach(function(item) {
                item.classList.remove('active')
            });
    
            month_1.forEach(function(item) {
                item.classList.remove('active')
            });
    
            currentMarkerBtn.classList.add('active')
            currentMarkerTab.classList.add('active')
        }
    });
}

document.querySelector('.marker').click()
// Метки




// Тabs years
// поиск элементов tab
const tabsYearsBtn   = document.querySelectorAll(".tabs-building-year")
const tabsYearsContent = document.querySelectorAll(".building-tab-block")

tabsYearsBtn.forEach(onYearClick);
// главная function
function onYearClick(year) {
    year.addEventListener("click", function() {
        let currentYearsBtn = year;
        let tabYearsId = currentYearsBtn.getAttribute("data-tab")
        let currentYearsTab = document.querySelector(tabYearsId)

        if( ! currentYearsBtn.classList.contains('active') ) {
            tabsYearsBtn.forEach(function(year) {
                year.classList.remove('active')
            });
    
            tabsYearsContent.forEach(function(year) {
                year.classList.remove('active')
            });
    
            currentYearsBtn.classList.add('active')
            currentYearsTab.classList.add('active')
        }
    });
}

document.querySelector('.tabs-building-year').click()
// Tabs year






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








