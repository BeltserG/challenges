function formInputs(){
    const forms = document.querySelector(".form[data-page='1'] .form-fields");

    forms.addEventListener("focusin", (e)=>{
        if (e.target.classList.contains("field--input")){
            e.target.classList.toggle("input-active");
        }
        e.target.addEventListener("keyup", (e)=>{
            inputErrorToggle(e.target);
        })
    })
    
    forms.addEventListener("focusout", (e)=>{
        if (e.target.classList.contains("field--input")){
            e.target.classList.toggle("input-active");
        }
        inputErrorToggle(e.target);
    })
}

function inputErrorToggle(target) {
    if (!target.value){
        target.previousElementSibling.querySelector(".input-error").textContent = "This field is required";
        target.classList.add("input-empty")
    }
    else{
        target.previousElementSibling.querySelector(".input-error").textContent = "";
        target.classList.remove("input-empty")
    }
}
// formInputs();
export default  formInputs;