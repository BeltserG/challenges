function options(){
    const optionsSecondpage = document.querySelector('.form[data-page="2"]');
    optionsSecondpage.addEventListener('click',(e)=>{
        if(e.target.classList.contains("form-fields__option")){
            const options = optionsSecondpage.querySelectorAll('.form-fields__option')
            for (let option of options){
                option.setAttribute('checked', false);
            }
            e.target.setAttribute('checked', true);
        }
        })
    }

export default options;