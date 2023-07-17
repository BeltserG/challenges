export default function toggleButton(){
    const toggle = document.querySelector(".toggle");
    toggle.addEventListener("click", (e)=>{
        if(e.target.classList.contains("toggle--button") || e.target.classList.contains("button-circle")){
            const circle = toggle.querySelector(".button-circle");
            circle.classList.toggle("toggled");
            toggle.querySelector(".monthly").classList.toggle("sub-chosen");
            toggle.querySelector(".yearly").classList.toggle("sub-chosen");
        }
    })
}