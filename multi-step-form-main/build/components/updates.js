function planUpdate (costs){
    const secondPage = document.querySelector(`.form[data-page="2"]`);
    const costElements = secondPage.querySelectorAll('.option--text--cost');
    for (let item of costElements){
        const value = costs.subcription[item.closest(".form-fields__option-wrapper").firstElementChild.textContent.toLowerCase()];
        item.textContent = `$${value}/mo`;
    }
}

export default planUpdate