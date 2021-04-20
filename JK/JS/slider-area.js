
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