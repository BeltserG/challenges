function options(){
    const optionsSecondpage = document.querySelector('.form[data-page="2"]');
    // const optionsThirdpage = document.querySelector('.form[data-page="2"]');
    // const pages = [optionsSecondpage, optionsThirdpage];
    // for(let page of pages){
    //     const options = page.querySelectorAll('.form-fields__option');
    //     if (page.dataset.page === "3"){
    //         page.addEventListener('click',(e)=>{
    //             const {target} = e;
    //             if(target.classList.contains("form-fields__option")){
    //                 const checked = target.getAttribute('checked');
    //                 if(checked === "true"){
    //                     target.setAttribute('checked', false);
    //                 }else{
    //                     target.setAttribute('checked', true);
    //                 }
    //             }
    //         })
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

    // const options = page.querySelectorAll('.form-fields__option');
    // optionsSecondpage.addEventListener('click',(e)=>{
    //     if(e.target.classList.contains("form-fields__option")){
    //         for (let option of options){
    //             option.setAttribute('checked', false);
    //         }
    //         e.target.setAttribute('checked', true);
    //     }
    // })

export default options;