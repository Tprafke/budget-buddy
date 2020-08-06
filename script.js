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
	let expenseType = data2.get("expense-type");
	remaining = remaining - number; 
	let someVariable = document.createElement("p");
	remainingParagraph.innerText = `Remaining: $${remaining}`;
	if (expense === "entertainment") {
		//  entertainmentContainer.innerText = "Entertainment";
		someVariable.innerText = ` ${expenseType} -$${number}`;
		entertainmentContainer.append(someVariable);
	} else if (expense === "food") {
		// foodContainer.innerText = `Food`;
		someVariable.innerText = ` ${expenseType} -$${number}`;
		foodContainer.append(someVariable);
	} else if (expense === "clothing") {
		// clothingContainer.innerText = `Clothing`;
		someVariable.innerText = ` ${expenseType} -$${number}`;
		clothingContainer.append(someVariable);
	} else {
		// billsContainer.innerText = `Bills`;
		someVariable.innerText = `${expenseType} -$${number}`;
		billsContainer.append(someVariable);
	}
});
