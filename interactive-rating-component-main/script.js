const grades = document.querySelectorAll(".choice-button");
const submit = document.querySelector(".submit-button");

grades.forEach((grade) => {
    grade.addEventListener("click", (event) => {
        if (!grade.classList.contains("active")){
            grades.forEach((grade) => {
                grade.classList.remove("active");
            })
            grade.classList.add("active");
        }
        
    })
})

submit.addEventListener("click", () => {
    console.log("111");
    let chosen = false;
    let selected;
    grades.forEach((grade, i) => {
        if (grade.classList.contains("active")){
            chosen = true;
            selected = i;
        }
    })
    if(chosen === true){
        let rating = document.getElementById("rating");
        rating.innerHTML = `You selected ${selected+1} out of 5`;
        document.querySelector(".card-thankyou").style.zIndex ="1";
    }else{

    }
})