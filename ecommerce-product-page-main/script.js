let inCartAmount = 0;

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
    productCardInteraction(data);
}
function thumbnailNavInteraction(sliderContainer, slides, currentSlide) {
    const thumbnails = [...sliderContainer.querySelectorAll(".thumbnails-navigation__thumbnail")];
    const slidesArray = [...slides];
    // thumbnails.forEach((thumb, thumbIndex)=>{
    //     thumb.addEventListener("click", ()=>{
    //         thumbnails.forEach((thumb)=>{
    //             thumb.classList.remove("chosen");
                // slides.forEach((slide, slideIndex)=>{
                //     slide.style.transform = `translateX(${100*(slideIndex-thumbIndex)}%)`
                // })
    //         })
    //         currentSlide = thumbIndex;
    //         thumb.classList.add("chosen");
    //     })
    // })
    sliderContainer.querySelector(".thumbnails-navigation").addEventListener("click", (e)=>{
        const {target} = e;
        const thumbClicked = target.closest(".thumbnails-navigation__thumbnail");
        const thumbClickedIndex = thumbnails.indexOf(thumbClicked);
        if (thumbClicked){
            thumbnails.forEach((thumb)=>{
                thumb.classList.remove("chosen");
                slides.forEach((slide, slideIndex)=>{
                    slide.style.transform = `translateX(${100*(slideIndex-thumbClickedIndex)}%)`
                })
            })
            currentSlide = thumbnails.indexOf(thumbClicked);
            thumbClicked.classList.add("chosen");
        }
    })
    thumbnails.forEach((thumb)=>{
        thumb.classList.remove("chosen");
    })
    thumbnails[currentSlide].classList.add("chosen");
}
function headerInteraction() {
    let hamburger = document.querySelector('.navigation__buttons--burger');
    let cross = document.querySelector('.navigation__buttons--cross');
    let navBar = document.querySelector('.navigation__buttons');
    let navListContainer = document.querySelector('.navigation__menu');
    let lightbox = document.querySelector("#lightbox");
    let cartIcon = document.querySelector("#cart-icon");
    let cartDropdown = document.querySelector(".cart__dropdown");
    
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
    const sliderContainers = document.querySelectorAll(".gallery-container");
    sliderContainers.forEach(sliderContainer =>{
        const prevArrow = sliderContainer.querySelector(".slider__button--previous");
        const nextArrow = sliderContainer.querySelector(".slider__button--next");
        const slides = sliderContainer.querySelectorAll(".slide");
        let currentSlide = 0;
        let carLen = slides.length;
        thumbnailNavInteraction(sliderContainer, slides, currentSlide);
        adaptSlides(slides);
        function adaptSlides(slides) {
            for (let i = 0; i < carLen; i++) {
                slides[i].style.transform = `translateX(${i * 100}%`;
            }
        }
        function changeSlide (clicked) {
            slides.forEach((slide, index) => {
                slide.style.transform = `translateX(${100*(index - clicked)}%)`;
            });
            currentSlide = clicked;
        }
    
    
    
        prevArrow.addEventListener('click', () => {
            if (currentSlide > 0){
                currentSlide--;
                thumbnailNavInteraction(sliderContainer, slides, currentSlide);
            }
            if (currentSlide >= 0){
                changeSlide(currentSlide);
                thumbnailNavInteraction(sliderContainer, slides, currentSlide);
            }
        })
        nextArrow.addEventListener('click', () => {
            currentSlide++;
            if (currentSlide >= carLen){
                currentSlide = 0;  
            }
            changeSlide(currentSlide);
            thumbnailNavInteraction(sliderContainer, slides, currentSlide);
            
        })
    })
}

function productCardInteraction(data) {
    const removeButton = document.querySelector(".remove-image");
    const addButton = document.querySelector(".add-image");
    const amountField = document.querySelector(".amount--field");
    const addToCartButton = document.querySelector(".addingbox__add-button");
    const add = document.querySelector(".addingbox__add-button");
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
    addToCartButton.addEventListener("click", () =>{
        if (amount > 0) {
            inCartAmount += amount;
            addToCart(inCartAmount, data);
        }
        
    })
}

function addToCart(amount, data) {
    const shopingCart = document.querySelector(".cart__dropdown--content");
    const iconAmount = document.querySelector("#cart-amount");
    iconAmount.style.visibility = "visible";
    iconAmount.innerHTML = `${amount}`;
    shopingCart.innerHTML = 
           `<div class="content--shoping__list">
              <div class="shoping__list__option">
                <div class="shoping__list--thumbnail">
                  <img src="images/image-product-1-thumbnail.jpg" alt="product image">
                </div>
                <div class="shoping__list--description">
                  <p class="description__product--name">${data[0].name}</p>
                  <p class="description__product--cost">$${data[0].price.toFixed(2)} x ${amount} <strong>$${(data[0].price*amount).toFixed(2)}</strong></p>
                </div>
                <div class="shoping__list--delete-icon">
                  <img src="images/icon-delete.svg" alt="">
                </div>
              </div>
            </div>
            <div class="content--checkout-button button" style="box-shadow:none;">
                <p>Checkout</p>
            </div>`
    const deleteButton = document.querySelector('.shoping__list--delete-icon');
    deleteButton.addEventListener('click', () => {
        shopingCart.innerHTML = '<p>Your cart is empty.</p>';
        iconAmount.style.visibility = "hidden";
        inCartAmount = 0;
    })  
}
function lightboxInteraction () {
    const galleryMain = document.querySelector("#main-gallery");
    const galleryLightbox = document.querySelector(".lightbox-view");
    const arrows = galleryLightbox.querySelector(".buttons-container");
    const lightbox = document.querySelector("#lightbox");
    const crossIcon = document.querySelector("#lightbox-gallery__cross-icon img");
    let width = window.innerWidth;
    galleryMain.querySelector(".slider__slides").addEventListener("click", () =>{
        if (width > 700){
            lightbox.style.display = "block";
            galleryLightbox.style.display = "flex";
            arrows.style.display = "flex";
        }
    })
    lightbox.addEventListener("click", () =>{
        galleryLightbox.style.display = "none";
    })
    crossIcon.addEventListener("click", () =>{
        galleryLightbox.style.display = "none";
        lightbox.style.display = "none";
    })
}
initProductCard();
headerInteraction();
sliderInteraction();
lightboxInteraction();