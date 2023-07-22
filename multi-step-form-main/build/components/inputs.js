function formInputs(data){
    const forms = document.querySelector(".form[data-page='1'] .form-fields");

    forms.addEventListener("focusin", (e)=>{
        if (e.target.classList.contains("field--input")){
            e.target.classList.toggle("input-active")

        }
        e.target.addEventListener("keyup", (e)=>{
            inputErrorToggle(e.target);
        })
    })
    
    forms.addEventListener("focusout", (e)=>{
        if (e.target.classList.contains("field--input")){
            e.target.classList.toggle("input-active");
            if(e.target.getAttribute("name") === "email"){
                if(!emailValidation(e.target.value.trim())){
                    e.target.previousElementSibling.querySelector(".input-error").textContent = "Please, provide a valid address";
                    e.target.classList.add("input-empty");
                }
            }
        }
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
function emailValidation(text){
    const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "gm");
    return emailRegex.test(text);
}
export default  formInputs;