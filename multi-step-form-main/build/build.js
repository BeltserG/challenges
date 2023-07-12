const cards = document.querySelectorAll('.form');
const stepButtons  = document.querySelector('.step-buttons');
let currentStep = "5";
for (let card of cards) {
    switch (currentStep){
        case "5":
            document.querySelector(".step-buttons").style.display = "none";


    }
    if(card.getAttribute("data-page") !== currentStep){
        card.style.display = 'none';
    }else{
        document.querySelector(".step-buttons--next").style.backgroundColor = "hsl(243, 100%, 62%)";
        document.querySelector(".step-buttons--next").innerHTML = "Confirm";
    }
    
}

// if (document.querySelector(".form[data-page='1']").display !== "none"){
//     stepButtons.querySelector(".step-buttons--back").style.display = "none";
// }