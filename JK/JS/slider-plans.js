
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