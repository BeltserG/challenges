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
        lightbox.style.opacity = "0.5";
    }else{
        hamburger.style.visibility = "visible";
        hamburger.setAttribute("aria-expanded", false);
        cross.style.visibility = "hidden";
        navListContainer.style.setProperty("--translateX", "translateX(-100%)");
        lightbox.style.opacity = "0";
    }
})