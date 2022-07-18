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

// SLIDER BAR

const sliderBlocks = [...document.querySelectorAll(".sliderRoom__img")];

document.querySelector(".next").addEventListener("click", () => {

    sliderBlocks.forEach( item => {
        let skip = false;
        item.classList.forEach( clazz => {
            if ( clazz === "active" && !skip) {
                item.classList.toggle("active");
                const nextItem = sliderBlocks[sliderBlocks.indexOf(item)+1];
                nextItem.classList.toggle("active");
                skip = true
            } else {
                skip = false;
            }
        })
    });

});
