const slides = document.getElementsByClassName('carousel-item');
const totalSlides = slides.length;

let slidePosition = 0;
const nextBtn = document.getElementById('carousel-button-next');
const prevBtn = document.getElementById('carousel-button-prev');

nextBtn.addEventListener('click', moveToNextSlide);

prevBtn.addEventListener('click', moveToPrevSlide);

function moveToNextSlide() {
    console.log('mvoin 2 next')
}

function moveToPrevSlide() {
    console.log('mvoin 2 preve')
}