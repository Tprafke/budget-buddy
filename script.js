"use strict";

let weekly = document.querySelector(".weekly");
let expenseContainer = document.querySelector(".expense-container");
let expenses = document.querySelector(".expenses");
let remainingParagraph = document.querySelector(".remaining");
let entertainmentContainer = document.querySelector(".entertainment-container");
let foodContainer = document.querySelector(".food-container");
let billsContainer = document.querySelector(".bills-container");
let clothingContainer = document.querySelector(".clothing-container");
let remaining = 0;

weekly.addEventListener("submit", (e) => {
	e.preventDefault();
	let data = new FormData(weekly);
	let income = data.get("amount");
	remaining = income;
	entertainmentContainer.innerHTML = "";
	foodContainer.innerHTML = "";
	billsContainer.innerHTML = "";
	clothingContainer.innerHTML = "";
	remainingParagraph.innerText = `Remaining: ${remaining}`;
});

expenses.addEventListener("submit", (e) => {
	e.preventDefault();
	let data2 = new FormData(expenses);
	let expense = data2.get("category");
	let number = data2.get("amount");
	remaining = remaining - number;
	let someVariable = document.createElement("p");
	remainingParagraph.innerText = `Remaining: ${remaining}`;
	if (expense === "entertainment") {
		someVariable.innerText = ` Entertainment -$${number}`;
		entertainmentContainer.append(someVariable);
	} else if (expense === "food") {
		someVariable.innerText = ` Grub -$${number}`;
		foodContainer.append(someVariable);
	} else if (expense === "clothing") {
		someVariable.innerText = ` Drip -$${number}`;
		billsContainer.append(someVariable);
	} else {
		someVariable.innerText = `Bills -$${number}`;
		clothingContainer.append(someVariable);
	}
});
