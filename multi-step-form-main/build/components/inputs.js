function formInputs(data){
    const forms = document.querySelector(".form[data-page='1'] .form-fields");

    forms.addEventListener("focusin", (e)=>{
        if (e.target.classList.contains("field--input")){
            e.target.classList.toggle("input-active");
        }
        e.target.addEventListener("keyup", (e)=>{
            // dataChange(data, e.target);
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
    if (!target.value.trim()){
        target.previousElementSibling.querySelector(".input-error").textContent = "This field is required";
        target.classList.add("input-empty")
    }
    else{
        target.previousElementSibling.querySelector(".input-error").textContent = "";
        target.classList.remove("input-empty")
    }
}
// function dataChange(data, input){
//     let element = input.getAttribute("name");
//     data[element] = input.value;
// }

export default  formInputs;