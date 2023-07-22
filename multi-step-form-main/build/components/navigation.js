function navigation(dataInputsOptions, costs){
    const navDots = document.querySelector(".paging__list");
    const cards = document.querySelectorAll('.form');
    const buttonsBottom = document.querySelector(".step-buttons");
    let clicked = "1";
    cardsUpdate(cards,clicked);
    buttonsUpdate(clicked,buttonsBottom);
    // navDots.addEventListener("click", (e)=>{
    //     if (e.target.classList.contains("list__option--button")){
    //         clicked = e.target.getAttribute("data-page");
    //     }
    //     cardsUpdate(cards,clicked,navDots);
    //     buttonsUpdate(clicked, buttonsBottom);
    // });

    
    buttonsBottom.addEventListener("click", (e) =>{
        if(e.target.classList.contains("step-buttons--back")){
            if(Number(clicked) > 1){
                clicked = String(clicked - 1);
                cardsUpdate(cards,clicked);
                buttonsUpdate(clicked, buttonsBottom)
            }
        }else if(e.target.classList.contains("step-buttons--next")){
            const response = checkStep(clicked, dataInputsOptions, costs, buttonsBottom);
            if(response){
                if(Number(clicked) < cards.length){
                    clicked = String(Number(clicked) + 1);
                    cardsUpdate(cards,clicked);
                    buttonsUpdate(clicked, buttonsBottom);
                    if (response === "planChange"){
                        const changeButton = document.querySelector(".cashout-position--change");
                        changeButton.addEventListener("click", () =>{
                            clicked = changePlan(cards,clicked);
                            cardsUpdate(cards,clicked);
                            buttonsUpdate(clicked, buttonsBottom);
                        })
                    }
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
            buttons.querySelector(".step-buttons--back").style.display = "none"
            buttons.querySelector(".step-buttons--next").classList.remove("button-confirm");
            buttons.querySelector(".step-buttons--next").textContent = "Next Step";
            break
        case "2":
            buttons.style.display = "flex";
            buttons.querySelector(".step-buttons--back").style.display = "flex"
            buttons.querySelector(".step-buttons--next").classList.remove("button-confirm");
            buttons.querySelector(".step-buttons--next").textContent = "Next Step";
            break
        case "3":
            buttons.style.display = "flex";
            buttons.querySelector(".step-buttons--back").style.display = "flex"
            buttons.querySelector(".step-buttons--next").classList.remove("button-confirm");
            buttons.querySelector(".step-buttons--next").textContent = "Next Step";
            break
        case "4":
            buttons.style.display = "flex";
            buttons.querySelector(".step-buttons--back").style.display = "flex"
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
                createCashoutPage(data, costs);
                return "planChange";
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
    return clicked;
}
function createCashoutPage(data, costs) {
    const page = document.querySelector(".form[data-page='4']");
    const list = document.createElement("div");
    list.className = "form-fields forms__cashout-wrapper";
    const duration = data.duration === "monthly";
    let totalCost = 0;
    let planExists = list.querySelector(".forms__cashout-position");
    let plan = document.createElement("div");
    plan.classList.add("forms__cashout-position", "plan");
    let planText = "";
    if (duration){
        planText = `$${costs.subscription[data.subscription]}/mo`
        totalCost += costs.subscription[data.subscription]; 
    }else{
        planText = `$${costs.subscription[data.subscription]*10}/yr`
        totalCost += costs.subscription[data.subscription]*10; 
    }
    plan.innerHTML = `
        <h3 class="cashout-position--header">${data.subscription} (${data.duration})
            <span class="cashout-position--change">Change</span>
        </h3>
        <p class="cashout-position--text">${planText}</p>`
    planExists ? list.replaceChild(plan, planExists) : list.appendChild(plan);
    
    for(let item in data.add_ons){
        const elementExists = list.querySelector(`#${item}`);
        if(data.add_ons[item]){
            let position = document.createElement("div");
            position.classList.add("forms__cashout-position");
            position.setAttribute("id", item);
            let planText = "";
            if(duration){
                planText = `$${costs.add_ons[item]}/mo`
                totalCost += costs.add_ons[item];
            }else{
                planText = `$${costs.add_ons[item]*10}/yr`
                totalCost += costs.add_ons[item]*10;
            }
            position.innerHTML = `
                <h3 class="cashout-position--header">${item.split("_").join(" ")}</h3>
                <p class="cashout-position--text">${planText}</p>`

            list.appendChild(position);
            elementExists ? list.replaceChild(position, elementExists) : list.appendChild(position); 
        }else{
            if(elementExists){
                list.removeChild(elementExists);
            }
        }
    }
    let totalElement = document.createElement('div');
    totalElement.className = "forms__cashout-position total";
    totalElement.innerHTML = `
        <h3 class="cashout-position--header">Total (per ${duration ? "month":"year"})</h3>
        <p class="cashout-position--text">$${totalCost}/${duration ? "mo":"yr"}</p>
    `
    page.querySelector(`.forms__cashout-wrapper`) ?
        page.replaceChild(list, page.querySelector(`.forms__cashout-wrapper`)) :
        page.appendChild(list);
    page.querySelector(`.total`) ?
        page.replaceChild(totalElement, page.querySelector(`.total`)) :
        page.appendChild(totalElement);
}
export default navigation;