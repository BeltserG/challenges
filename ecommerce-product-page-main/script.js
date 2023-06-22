function headerInteraction() {
    let hamburger = document.querySelector('.navigation__buttons--burger');
    let cross = document.querySelector('.navigation__buttons--cross');
    let navBar = document.querySelector('.navigation__buttons');
    let navListContainer = document.querySelector('.navigation__menu');
    let lightbox = document.querySelector("#lightbox");

    navBar.addEventListener('click', () => {
        if (hamburger.getAttribute("aria-expanded") === "false") {
            hamburger.style.visibility = "hidden";
            hamburger.setAttribute("aria-expanded", true);
            cross.style.visibility = "visible";
            navListContainer.style.setProperty("--translateX", "translateX(0%)");
            lightbox.style.display = "block";
        }else{
            hamburger.style.visibility = "visible";
            hamburger.setAttribute("aria-expanded", false);
            cross.style.visibility = "hidden";
            navListContainer.style.setProperty("--translateX", "translateX(-100%)");
            lightbox.style.display = "none";
        }
    })

    lightbox.addEventListener("click", () => {
        hamburger.style.visibility = "visible";
        hamburger.setAttribute("aria-expanded", false);
        cross.style.visibility = "hidden";
        navListContainer.style.setProperty("--translateX", "translateX(-100%)");
        lightbox.style.display = "none";
    })
}

function sliderInteraction() {
    const slides = document.querySelectorAll(".slide");
    const prevArrow = document.querySelector(".slider__button--previous");
    const nextArrow = document.querySelector(".slider__button--next");

    let currentSlide = 0;
    let carLen = slides.length;

    adaptSlides(slides);

    function changeSlide (clicked) {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100*(index - clicked)}%)`;
        });
        currentSlide = clicked;
    }

    function adaptSlides(slides) {
        for (let i = 0; i < carLen; i++) {
            slides[i].style.transform = `translateX(${i * 100}%`;
        }
    }

    prevArrow.addEventListener('click', () => {
        currentSlide--;
        if (currentSlide >= 0){
            changeSlide(currentSlide);
        }
    })
    nextArrow.addEventListener('click', () => {
        currentSlide++;
        console.log(currentSlide);
        if (currentSlide >= carLen){
            currentSlide = 0;  
        }
        changeSlide(currentSlide);
        
    })
}


headerInteraction();
sliderInteraction();