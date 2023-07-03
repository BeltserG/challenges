const burger = document.querySelector(".mobile-buttons--burger");
const cross = document.querySelector(".mobile-buttons--cross");
const headerMobileButtons = document.querySelector(".header__mobile-buttons");
const navigation = document.querySelector(".header__navigation");
const lightbox = document.querySelector("#lightbox");

function toggleNavigationMenu(){
    headerMobileButtons.addEventListener("click", () => {
        if (navigation.getAttribute("aria-expanded") === "true"){
            burger.style.opacity = "1";
            cross.style.opacity = "0";
            navigation.setAttribute("aria-expanded", "false");
            navigation.style.visibility = "hidden";
            navigation.style.opacity = "0";
            lightbox.style.visibility = "hidden";
            lightbox.style.opacity = "0";
        }else{
            burger.style.opacity = "0";
            cross.style.opacity = "1";
            navigation.setAttribute("aria-expanded", "true");
            navigation.style.visibility = "visible";
            navigation.style.opacity = "1";
            lightbox.style.visibility = "visible";
            lightbox.style.opacity = ".5";
        }
    })
}

toggleNavigationMenu();