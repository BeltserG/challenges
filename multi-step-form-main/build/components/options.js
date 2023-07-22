function options(data, costs){
    const optionsSecondpage = document.querySelector('.form[data-page="2"]');
    optionsSecondpage.addEventListener('click',(e)=>{
        const targetParent = e.target.closest(".form-fields__option");
        if(targetParent){
            const options = optionsSecondpage.querySelectorAll('.form-fields__option')
            for (let option of options){
                option.setAttribute('checked', false);
            }
            targetParent.setAttribute('checked', true);
            data.subscription = targetParent.querySelector('.option--name').textContent.toLowerCase();
        }
    })
    const optionsThirdPage = document.querySelector('.form[data-page="3"]');
    const add_onCosts = optionsThirdPage.querySelectorAll('.add-on--cost');
    for (let item of add_onCosts) {
        const value = costs.add_ons[item.previousElementSibling.getAttribute("for")];
        item.textContent = `+$${value}/mo`;
    }
    optionsThirdPage.addEventListener('change', (e) => {
        const targetParent = e.target.closest(".form-fields__option");
        if(targetParent){
            if(e.target.checked){
                data.add_ons[targetParent.getAttribute("for")] = true;
            }else{
                data.add_ons[targetParent.getAttribute("for")] = false;
            }
        }
    })
}
export default options;