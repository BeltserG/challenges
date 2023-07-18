function options(data){
    const optionsSecondpage = document.querySelector('.form[data-page="2"]');
    optionsSecondpage.addEventListener('click',(e)=>{
        const targetParent = e.target.closest(".form-fields__option");
        if(targetParent){
            const options = optionsSecondpage.querySelectorAll('.form-fields__option')
            for (let option of options){
                option.setAttribute('checked', false);
            }
            targetParent.setAttribute('checked', true);
            data.subscription = targetParent.querySelector('.option--name').textContent;
        }
    })
    const optionsThirdPage = document.querySelector('.form[data-page="3"]');
    optionsThirdPage.addEventListener('change', (e) => {
        console.log(e.target.checked)
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