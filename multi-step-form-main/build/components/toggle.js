function toggleButton(data, costs){
    planUpdate(data,costs);
    const toggle = document.querySelector(".toggle");
    toggle.querySelector(`.${data.duration}`).classList.add("sub-chosen");
    toggle.addEventListener("click", (e)=>{
        const targetParent = e.target.closest(".toggle--button");
        if(targetParent){
            const circle = targetParent.querySelector(".button-circle");
            circle.classList.toggle("toggled");
            circle.classList.contains("toggled") ? data.duration = "yearly" : data.duration = "monthly";
            toggle.querySelector(".monthly").classList.toggle("sub-chosen");
            toggle.querySelector(".yearly").classList.toggle("sub-chosen");
            planUpdate(data,costs);
        }
        console.log(data)
    })
}
function planUpdate (data,costs){
    const secondPage = document.querySelector(`.form[data-page="2"]`);
    const costElements = secondPage.querySelectorAll('.option--text--cost');
    for (let item of costElements){
        const value = costs.subcription[item.closest(".form-fields__option-wrapper").firstElementChild.textContent.toLowerCase()];
        if(data.duration === "monthly"){
            item.textContent = `$${value}/mo`;
            item.nextElementSibling.textContent = "";
        }else if(data.duration === "yearly"){
            item.textContent = `$${value*10}/yr`;
            item.nextElementSibling.textContent = costs.discount;
        }
    }
}

export {toggleButton, planUpdate}