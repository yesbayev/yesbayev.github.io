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