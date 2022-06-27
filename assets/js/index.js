const sliderImages = document.querySelectorAll(".slider__img"),
    sliderLine = document.querySelector(".slider__line");

let width = document.querySelector(".slider").offsetWidth;

let count = 0;

document.querySelector(".button-next").addEventListener("click", () => {
    count+=3;
    if (count >= sliderImages.length ) {
        count = 0;
    }
    rollSlide(count);
});

document.querySelector(".button-prev").addEventListener("click", () => {
    count-=3;
    if (count < 0 ) {
        count = sliderImages.length-3;
    }
    rollSlide(count);
});

function rollSlide(count) {
    sliderLine.style.transform = "translate(-" + count/3 * width + "px)";
}

