function navigation(dataInputsOptions){
    const navDots = document.querySelector(".paging__list");
    const cards = document.querySelectorAll('.form');
    let clicked = "1";
    cardsUpdate(cards,clicked);
    navDots.addEventListener("click", (e)=>{
        if (e.target.classList.contains("list__option--button")){
            clicked = e.target.getAttribute("data-page");
        }
        cardsUpdate(cards,clicked,navDots);
        buttonsUpdate(clicked, buttonsBottom);
    });

    const buttonsBottom = document.querySelector(".step-buttons");
    buttonsBottom.addEventListener("click", (e) =>{
        if(e.target.classList.contains("step-buttons--back")){
            if(Number(clicked) > 1){
                clicked = String(clicked - 1);
                cardsUpdate(cards,clicked);
                buttonsUpdate(clicked, buttonsBottom)
            }
        }else if(e.target.classList.contains("step-buttons--next")){
            console.log(dataInputsOptions)
            if(checkStep(clicked, dataInputsOptions)){
                if(Number(clicked) < cards.length){
                    clicked = String(Number(clicked) + 1);
                    cardsUpdate(cards,clicked);
                    buttonsUpdate(clicked, buttonsBottom)
                }
            }
        }
    })
};
function cardsUpdate(cards,clicked) {
    for (let card of cards) {
        const page = card.getAttribute("data-page");
        if(page !== clicked){
            card.style.display = 'none';
            document.querySelector(`.list__option--button[data-page="${page}"]`)?.classList.remove("button--active");
        }else{
            card.style.display = 'flex';
            // document.querySelector(".step-buttons--next").style.backgroundColor = "hsl(243, 100%, 62%)";
            if(Number(clicked) < cards.length){
                document.querySelector(`.list__option--button[data-page="${clicked}"]`).classList.add("button--active");
            }   
        }
    }
};
function buttonsUpdate(clicked,buttons){
    switch(clicked){
        case "1":
            buttons.style.display = "flex";
            buttons.querySelector(".step-buttons--next").classList.remove("button-confirm");
            buttons.querySelector(".step-buttons--next").textContent = "Next Step";
            break
        case "2":
            buttons.style.display = "flex";
            buttons.querySelector(".step-buttons--next").classList.remove("button-confirm");
            buttons.querySelector(".step-buttons--next").textContent = "Next Step";
            break
        case "3":
            buttons.style.display = "flex";
            buttons.querySelector(".step-buttons--next").classList.remove("button-confirm");
            buttons.querySelector(".step-buttons--next").textContent = "Next Step";
            break
        case "4":
            buttons.style.display = "flex";
            buttons.querySelector(".step-buttons--next").classList.add("button-confirm");
            buttons.querySelector(".step-buttons--next").textContent = "Confirm";
            break
        case "5":
            buttons.style.display = "none";
    }
};
function checkStep(clicked, data){
    switch(clicked){
        case "1":
            const checkFirst = data => {
                if (!data.name || !data.email || !data.phone){
                    return false;
                }
                return true;
            }
            return checkFirst(data) ? true : false;
        case "2":
            const checkSecond = data => {
                return data.subscription ? true : false;
            }
            console.log(checkSecond(data));
            return checkSecond(data) ? true : false;
        case "3":
            const checkThird = data => {
                for (let key in data.add_ons){
                    if(data.add_ons[key]){
                        return true;
                    }
                }
                return false;
            }
            return checkThird(data) ? true : false;
    }
}
export default navigation;