const cards = document.querySelectorAll('.form');

for (let card of cards) {
    if(card.getAttribute("data-page") !== "1")
    card.style.display = 'none';
}