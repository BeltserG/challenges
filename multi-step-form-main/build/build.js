const cards = document.querySelectorAll('.form');
const stepButtons  = document.querySelector('.step-buttons');

for (let card of cards) {
    if(card.getAttribute("data-page") !== "4"){
        card.style.display = 'none';
    }
}

// if (document.querySelector(".form[data-page='1']").display !== "none"){
//     stepButtons.querySelector(".step-buttons--back").style.display = "none";
// }