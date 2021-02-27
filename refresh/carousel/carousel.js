const slides = document.getElementsByClassName('carousel-item');

const totalSlides = slides.length;
const lastPosition = totalSlides - 1;
const numOfVisibleSlides = 3;
let slidePosition = numOfVisibleSlides - 1;
let last = slidePosition;
let middle = slidePosition - 1;
let first = slidePosition - 2;
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');


// automatic slide trasnistion
// let interval = setInterval(() => {
//     moveToNextSlide()
// }, 3000);

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
// const indicatorHolder = document.querySelector('.indicators');
// indicatorHolder.innerHTML = '';



// for (let i = 0; i < totalSlides; i++) {
//     indicatorHolder.innerHTML += `<div class="indicator" id="${i}"></div>`
// }

// const indicators = document.getElementsByClassName('indicator');

// indicators[0].classList.add('active');


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
    // removeActiveClassFromIndicators();
    // we check if current slide is the last one. if it is, we reset slideposition. if not we increment slid position

    if (last === lastPosition) {
        slides[first].classList.remove('first');
        slides[last].classList.remove('last');
        // removeFirstLastClass();
        middle++;
        first++;
        last = 0;
        // addFirstLastClass();
        slides[first].classList.add('first');
        slides[last].classList.add('last');

    } else if (middle === lastPosition) {
        removeFirstLastClass();

        middle = 0;
        last++;
        first++;
        // slides[middle].classList.add('middle');
        addFirstLastClass();

    } else if (first === lastPosition) {
        removeFirstLastClass();
        first = 0;
        last++;
        middle++;
        addFirstLastClass();
    } else {
        removeFirstLastClass();
        last++;
        middle++;
        first++;
        addFirstLastClass();
    }
    // we make the current slide visible
    makeSlidesVisible();

    // indicators[slidePosition].classList.add('active');

}

function removeFirstLastClass() {
    if (slides[first]) {
        slides[first].classList.remove('first');
    }

    slides[last].classList.remove('last');
}

function addFirstLastClass() {
    slides[first].classList.add('first');
    slides[last].classList.add('last');
}

function makeSlidesVisible() {
    slides[first].classList.add('carousel-item-visible');

    slides[middle].classList.add('carousel-item-visible');

    slides[last].classList.add('carousel-item-visible');

}



function moveToPrevSlide() {
    // removeActiveClassFromIndicators();
    hideAllSlides();

    // we check if we are on slide position 0. if so we set slidepositon to last slide, otherwise we decrement slide pos
    if (first === 0) {
        removeFirstLastClass();
        first = lastPosition;
        middle--;
        last--;
        addFirstLastClass();
    } else if (middle === 0) {
        removeFirstLastClass();
        middle = lastPosition;
        first--;
        last--;
        addFirstLastClass();
    } else if (last === 0) {
        removeFirstLastClass();
        last = lastPosition;
        first--;
        middle--;
        addFirstLastClass();
    } else {
        removeFirstLastClass();
        last--;
        middle--;
        first--;
        addFirstLastClass();
    }
    makeSlidesVisible();
    // slidePosition === 0 ? slidePosition = totalSlides - 1 : slidePosition--;

    // slides[slidePosition].classList.add('carousel-item-visible');
    // indicators[slidePosition].classList.add('active');
}





function hideAllSlides() {
    for (const slide of slides) {
        slide.classList.remove('carousel-item-visible');
        // slide.classList.add('carousel-item-hidden');
    }
}

// function removeActiveClassFromIndicators() {
//     for (const indicator of indicators) {
//         indicator.classList.remove('active');
//     };
// }

// for (const indicator of indicators) {
//     indicator.addEventListener('click', () => {
//         // clearInterval(interval);
//         hideAllSlides();
//         removeActiveClassFromIndicators();
//         const indicatorId = parseInt(indicator.id);
//         slides[indicatorId].classList.add('carousel-item-visible');
//         slidePosition = indicatorId;
//         indicator.classList.add('active');
//     })
// }