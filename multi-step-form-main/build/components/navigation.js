function navigation(dataInputsOptions, costs){
    const navDots = document.querySelector(".paging__list");
    const cards = document.querySelectorAll('.form');
    let clicked = "4";
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
            if(checkStep(clicked, dataInputsOptions, costs)){
                if(Number(clicked) < cards.length){
                    clicked = String(Number(clicked) + 1);
                    cardsUpdate(cards,clicked);
                    buttonsUpdate(clicked, buttonsBottom)
                }
            }
            console.log(dataInputsOptions)
        }
    })
    const changeButton = document.querySelector(".cashout-position--change");
    console.log(changeButton)
    changeButton.addEventListener("click", ()=>{
        changePlan(cards, clicked);
    });
};
function cardsUpdate(cards,clicked) {
    for (let card of cards) {
        const page = card.getAttribute("data-page");
        if(page !== clicked){
            card.style.display = 'none';
            document.querySelector(`.list__option--button[data-page="${page}"]`)?.classList.remove("button--active");
        }else{
            card.style.display = 'flex';
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
function checkStep(clicked, data, costs){
    switch(clicked){
        case "1":
            const inputs = document.querySelectorAll(`input[type="text"]`);
            for (let e of inputs) {
                data[e.name] = e.value
            }
            const checkFirst = data => {
                if (!data.name || !data.email || !data.phone){
                    return false;
                }
                return true;
            }
            return checkFirst(data) ? true : false;
        case "2":
                return data.subscription ? true : false;
        case "3":
            const checkThird = data => {
                for (let key in data.add_ons){
                    if(data.add_ons[key]){
                        return true;
                    }
                }
                return false;
            }
            if(checkThird){
                costCalculation(data,costs);
            }
            return checkThird(data);
        case "4":

            return true;
   }
}
function changePlan (cards, clicked){
    clicked = "2";
    for (let card of cards) {
        card.getAttribute("data-page") !== clicked ? 
        card.style.display = 'none': card.style.display = 'flex';
    }
}
function costCalculation(data, costs){
    const page = document.querySelector(".form[data-page='4']");
    const plan = page.querySelector(".cashout-position--header");
    
    console.log(page)
}
export default navigation;