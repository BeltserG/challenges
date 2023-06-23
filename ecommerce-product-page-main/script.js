async function initProductCard() {
    const response = await fetch("products.json");
    const data = await response.json();
    const productNameField = document.querySelector(".product--name");
    productNameField.innerHTML = data[0].name;
    const productDescriptionField = document.querySelector(".product--info");
    productDescriptionField.innerHTML = data[0].description;
    const productCompanyField = document.querySelector(".product--company");
    productCompanyField.innerHTML = data[0].company;
    const productCurrentPriceField = document.querySelector(".current-price");
    productCurrentPriceField.innerHTML = `$${data[0].price.toFixed(2)}`;
    const productOldPriceField = document.querySelector(".old-price");
    productOldPriceField.innerHTML = `$${data[0]["old-price"].toFixed(2)}`;
    const discountField = document.querySelector(".discount");
    discountField.innerHTML = `${(data[0]["old-price"] - data[0].price)/data[0]["old-price"]*100}%`;
}

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

    let cartIcon = document.querySelector("#cart-icon");
    let cartDropdown = document.querySelector(".cart__dropdown");
    cartIcon.addEventListener("click", () =>{
        if (cartDropdown.getAttribute("aria-expanded") === "true") {
            cartIcon.style.filter = "";
            cartDropdown.style.opacity = "0";
            cartDropdown.style.visibility = "hidden";
            cartDropdown.style.setProperty("--animation-slide", "1rem");
            cartDropdown.setAttribute("aria-expanded",false);
        }else{
            cartIcon.style.filter = "brightness(0%)";
            cartDropdown.style.opacity = "1";
            cartDropdown.style.visibility = "visible";
            cartDropdown.style.setProperty("--animation-slide", "0rem");
            cartDropdown.setAttribute("aria-expanded",true);
        }
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

function productCardInteraction() {
    const removeButton = document.querySelector(".remove-image");
    const addButton = document.querySelector(".add-image");
    const amountField = document.querySelector(".amount--field");
    let amount = 0;

    amountField.innerHTML = amount;
    removeButton.addEventListener("click", () => {
        if (amount > 0) {
            amount -= 1;
        }
        amountField.innerHTML = amount;
    })
    addButton.addEventListener("click", () => {
        amount += 1;
        amountField.innerHTML = amount;
    })
}
initProductCard();
productCardInteraction();
headerInteraction();
sliderInteraction();