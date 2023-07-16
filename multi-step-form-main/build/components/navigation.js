function navigation(){
    const navDots = document.querySelector(".paging__list");
    const cards = document.querySelectorAll('.form');
    let clicked = "1";
    cardsUpdate(cards,clicked);
    navDots.addEventListener("click", (e)=>{
        if (e.target.classList.contains("list__option--button")){
            clicked = e.target.getAttribute("data-page");
        }
        cardsUpdate(cards,clicked,navDots);
    });
}
function cardsUpdate(cards,clicked) {
    for (let card of cards) {
        const page = card.getAttribute("data-page");
        if(page !== clicked){
            card.style.display = 'none';
            document.querySelector(`.list__option--button[data-page="${page}"]`)?.classList.remove("button--active");
        }else{
            card.style.display = 'flex';
            document.querySelector(".step-buttons--next").style.backgroundColor = "hsl(243, 100%, 62%)";
            document.querySelector(`.list__option--button[data-page="${clicked}"]`).classList.add("button--active");
        }
    }
};

export default navigation;