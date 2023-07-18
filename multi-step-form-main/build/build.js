import navigation from "./components/navigation.js"
import formInputs from "./components/inputs.js"
import options from "./components/options.js"
import toggleButton from "./components/toggle.js"
const userData = {
    id:"1",
    name: "",
    email: "",
    phone: "",
    subcription: "",
    add_ons:{
        online_service: "",
        larger_storage: "",
        customizable_profile: ""
    } 
}
const dataInputsOptions = {
    name: "",
    email: "",
    phone: "",
    subscription: "",
    add_ons:{
        online_service: "",
        larger_storage: "",
        customizable_profile: ""
    }
}
navigation(dataInputsOptions);
formInputs(dataInputsOptions);
options(dataInputsOptions);
toggleButton();

// document.querySelector("body").addEventListener("click", () => console.log("yeah"));