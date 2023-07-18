export default function toggleButton(data){
    const toggle = document.querySelector(".toggle");
    toggle.querySelector(`.${data.duration}`).classList.add("sub-chosen");
    toggle.addEventListener("click", (e)=>{
        const targetParent = e.target.closest(".toggle--button");
        if(targetParent){
            const circle = targetParent.querySelector(".button-circle");
            circle.classList.toggle("toggled");
            circle.classList.contains("toggled") ? data.duration = "yearly" : data.duration = "monthly";
            toggle.querySelector(".monthly").classList.toggle("sub-chosen");
            toggle.querySelector(".yearly").classList.toggle("sub-chosen");
        }
        console.log(data)
    })
}