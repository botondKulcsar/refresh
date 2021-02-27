const slides = document.getElementsByClassName('carousel-item');

const totalSlides = slides.length;

const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');


// automatic slide trasnistion
let interval = setInterval(() => {
    moveToNextSlide()
}, 3000);

// when clicking on play button 
playBtn.addEventListener('click', () => {
    moveToNextSlide();
    interval = setInterval(() => {
        moveToNextSlide()
    }, 3000);

})

// when clicking the stop button

stopBtn.addEventListener('click', () => {
    clearInterval(interval);
});

// creating slide indicators
const indicatorHolder = document.querySelector('.indicators');
indicatorHolder.innerHTML = '';



for (let i = 0; i < totalSlides; i++) {
    indicatorHolder.innerHTML += `<div class="indicator" id="${i}"></div>`
}

const indicators = document.getElementsByClassName('indicator');

indicators[0].classList.add('active');

let slidePosition = 0;
const nextBtn = document.getElementById('carousel-button-next');
const prevBtn = document.getElementById('carousel-button-prev');




// stop automatic playing
for (const slide of slides) {
    slide.addEventListener('click', function() {
        clearInterval(interval);
    })
}



nextBtn.addEventListener('click', moveToNextSlide);

prevBtn.addEventListener('click', moveToPrevSlide);

function moveToNextSlide() {
    // we hide all the slides
    hideAllSlides();
    // we remove the active class from indicators
    removeActiveClassFromIndicators();
    // we check if current slide is the last one. if it is, we reset slideposition. if not we increment slid position
    slidePosition === totalSlides - 1 ? slidePosition = 0 : slidePosition++;
    // we make the current slide visible
    slides[slidePosition].classList.add('carousel-item-visible');
    indicators[slidePosition].classList.add('active');

}

function moveToPrevSlide() {
    removeActiveClassFromIndicators();
    hideAllSlides();
    // we check if we are on slide position 0. if so we set slidepositon to last slide, otherwise we decrement slide pos
    slidePosition === 0 ? slidePosition = totalSlides - 1 : slidePosition--;

    slides[slidePosition].classList.add('carousel-item-visible');
    indicators[slidePosition].classList.add('active');
}

function hideAllSlides() {
    for (const slide of slides) {
        slide.classList.remove('carousel-item-visible');
        // slide.classList.add('carousel-item-hidden');
    }
}

function removeActiveClassFromIndicators() {
    for (const indicator of indicators) {
        indicator.classList.remove('active');
    };
}

for (const indicator of indicators) {
    indicator.addEventListener('click', () => {
        // clearInterval(interval);
        hideAllSlides();
        removeActiveClassFromIndicators();
        const indicatorId = parseInt(indicator.id);
        slides[indicatorId].classList.add('carousel-item-visible');
        slidePosition = indicatorId;
        indicator.classList.add('active');
    })
}