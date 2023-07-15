function navigation(){
    const navDots = document.querySelector(".paging__list");
    const cards = document.querySelectorAll('.form');
    let clicked = "1";
    cardsUpdate(cards,clicked);
    navDots.addEventListener("click", (e)=>{
        if (e.target.classList.contains("list__option--button")){
            clicked = e.target.getAttribute("data-page");
            console.log(clicked)
        }
        cardsUpdate(cards,clicked,navDots);
    });
}
function cardsUpdate(cards,clicked) {
    for (let card of cards) {
        if(card.getAttribute("data-page") !== clicked){
            card.style.display = 'none';
            document.querySelector(`.list__option--button[data-page="${clicked}"]`).classList.remove("option--button--active");
      }else{
            card.style.display = 'flex';
            document.querySelector(".step-buttons--next").style.backgroundColor = "hsl(243, 100%, 62%)";
            document.querySelector(`.list__option--button[data-page="${clicked}"]`).classList.add("option--button--active");
        }
    }
};

export default navigation;