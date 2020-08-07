"use strict";

let weekly = document.querySelector(".weekly");
let expenseContainer = document.querySelector(".expense-container");
let expenses = document.querySelector(".expenses");
let remainingParagraph = document.querySelector(".remaining");
let entertainmentContainer = document.querySelector(".entertainment-container");
let foodContainer = document.querySelector(".food-container");
let billsContainer = document.querySelector(".bills-container");
let clothingContainer = document.querySelector(".clothing-container");
let spentParagraph = document.querySelector(".spent");
let entParagraph = document.querySelector(".ent-total");
let foodParagraph = document.querySelector(".food-total");
let billsParagraph = document.querySelector(".bills-total");
let clothingParagraph = document.querySelector(".clothing-total");

let remaining = 0;
let totalSpent = 0;
let initialBudget = 0;
let eTotal = 0;
let foodTotal = 0;
let clothingTotal = 0;
let billsTotal = 0;

weekly.addEventListener("submit", (e) => {
	e.preventDefault();
	let data = new FormData(weekly);
	let income = data.get("amount");
	remaining = income;
	entertainmentContainer.innerHTML = "";
	foodContainer.innerHTML = "";
	billsContainer.innerHTML = "";
	clothingContainer.innerHTML = "";
	remainingParagraph.innerText = `Remaining: $${remaining}`;
	remainingParagraph.classList.remove("red");
	initialBudget = remaining;
	let totalSpent = 0;
	eTotal = 0;
	foodTotal = 0;
	clothingTotal = 0;
	billsTotal = 0;
	entParagraph.innerText = `Entertainment Total: $${eTotal}`;
	foodParagraph.innerText = `Food Total: $${foodTotal}`;
	clothingParagraph.innerText = `Clothing Total: $${clothingTotal}`;
	billsParagraph.innerText = `Bills Total: $${billsTotal}`;
	spentParagraph.innerText = `Total Spent: $${totalSpent}`;
});

expenses.addEventListener("submit", (e) => {
	e.preventDefault();
	let data2 = new FormData(expenses);
	let expense = data2.get("category");
	let number = data2.get("amount");
	let expenseType = data2.get("expense-type");
	remaining = remaining - number;
	let someVariable = document.createElement("p");
	remainingParagraph.innerText = `Remaining: $${remaining}`;
	if (expense === "entertainment") {
		someVariable.innerText = ` ${expenseType}: -$${number}`;
		entertainmentContainer.append(someVariable);
		eTotal = parseInt(eTotal) + parseInt(number);
		entParagraph.innerText = `Entertainment Total: $${eTotal}`;
	} else if (expense === "food") {
		someVariable.innerText = ` ${expenseType}: -$${number}`;
		foodContainer.append(someVariable);
		foodTotal = parseInt(foodTotal) + parseInt(number);
		foodParagraph.innerText = `Food Total: $${foodTotal}`;
	} else if (expense === "clothing") {
		someVariable.innerText = ` ${expenseType}: -$${number}`;
		clothingContainer.append(someVariable);
		clothingTotal = parseInt(clothingTotal) + parseInt(number);
		clothingParagraph.innerText = `Clothing Total: $${clothingTotal}`;
	} else {
		someVariable.innerText = `${expenseType}: -$${number}`;
		billsContainer.append(someVariable);
		billsTotal = parseInt(billsTotal) + parseInt(number);
		billsParagraph.innerText = `Bills Total: $${billsTotal}`;
	}
	if (remaining < 0) {
		remainingParagraph.classList.add("red");
	} else {
		remainingParagraph.classList.remove("red");
	}
	totalSpent = initialBudget - remaining;
	spentParagraph.innerText = `Total Spent: $${totalSpent}`;
});
