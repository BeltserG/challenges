import navigation from "./components/navigation.js"
import formInputs from "./components/inputs.js"
import options from "./components/options.js"
import {toggleButton, planUpdate} from "./components/toggle.js"

const dataInputsOptions = {
    name: "",
    email: "",
    phone: "",
    subscription: "",
    duration: "monthly",
    add_ons:{
        online_service: false,
        larger_storage: false,
        customizable_profile: false
    }
}
const costs = {
    subscription: {
        arcade: 9,
        advanced: 12,
        pro: 15
    },
    add_ons:{
        online_service: 1,
        larger_storage: 2,
        customizable_profile: 2
    },
    discount: "2 months free"
}
navigation(dataInputsOptions, costs);
formInputs(dataInputsOptions);
options(dataInputsOptions, costs);
toggleButton(dataInputsOptions, costs);