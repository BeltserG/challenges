async function getQuotes(){
    const response = await fetch("https://api.adviceslip.com/advice");
    const object = await response.json();
    const advice = document.querySelector('.card__header');
    advice.innerHTML = `Advice #${object.slip.id}`;
    const quote = document.querySelector('.card__quote');
    quote.innerHTML = `${object.slip.advice}`;

}

const button = document.querySelector('.card__roll--button');
button.addEventListener('click', getQuotes);