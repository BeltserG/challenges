const scales = document.querySelectorAll(".graph__scale");

function allignCosts(data, domItems){
	const maxAmount = findMax(data);
	data.forEach((day) =>{
		domItems.forEach((scale) =>{
			if (day["day"] === scale.lastElementChild.innerHTML){
				scale.firstElementChild.innerHTML = `$${day["amount"]}`;
				scale.querySelector(".graph__scale--bar").style.height = `${day["amount"]/maxAmount*60}%`;
			}
		})
	})
}

function findMax(data) {
	let numbers = [];
	data.forEach((e) => {
		numbers.push(e["amount"])
	})
	return Math.max(...numbers);
}

async function fet() {
	let data;
	await fetch("./data.json")
	.then((response) => response.json())
	.then((json) => data = json)
	.catch((err) => console.log(err))
	allignCosts(data, scales);
};

fet();