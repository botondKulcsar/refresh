const slides = document.getElementsByClassName('carousel-item');
const totalSlides = slides.length;

let slidePosition = 0;
const nextBtn = document.getElementById('carousel-button-next');
const prevBtn = document.getElementById('carousel-button-prev');

nextBtn.addEventListener('click', moveToNextSlide);

prevBtn.addEventListener('click', moveToPrevSlide);

function moveToNextSlide() {
    // we hide all the slides
    hideAllSlides();
    // we check if current slide is the last one. if it is, we reset slideposition. if not we increment slid position
    slidePosition === totalSlides - 1 ? slidePosition = 0 : slidePosition++;
    // we make the current slide visible
    slides[slidePosition].classList.add('carousel-item-visible');

}

function moveToPrevSlide() {
    hideAllSlides();
    // we check if we are on slide position 0. if so we set slidepositon to last slide, otherwise we decrement slide pos
    slidePosition === 0 ? slidePosition = totalSlides - 1 : slidePosition--;

    slides[slidePosition].classList.add('carousel-item-visible');
}

function hideAllSlides() {
    for (const slide of slides) {
        slide.classList.remove('carousel-item-visible');
        // slide.classList.add('carousel-item-hidden');
    }
}