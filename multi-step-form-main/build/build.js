import navigation from "./components/navigation.js"
import formInputs from "./components/inputs.js"
import options from "./components/options.js"
import toggleButton from "./components/toggle.js"
import planUpdate from "./components/updates.js"
const userData = {
    id:"1",
    name: "",
    email: "",
    phone: "",
    subcription: "",
    duration: "",
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
    duration: "monthly",
    add_ons:{
        online_service: "",
        larger_storage: "",
        customizable_profile: ""
    }
}
const costs = {
    subcription: {
        arcade: 9,
        advanced: 12,
        pro: 15
    },
    duration:{
        monthly: 1,
        yearly: 0.85
    }
}
planUpdate(costs);
navigation(dataInputsOptions, costs);
formInputs(dataInputsOptions);
options(dataInputsOptions);
toggleButton(dataInputsOptions);