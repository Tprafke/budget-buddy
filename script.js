"use strict";

let weekly = document.querySelector(".weekly");
let expenseContainer = document.querySelector(".expense-container");
let expenses = document.querySelector(".expenses");
let remainingParagraph = document.querySelector(".remaining");

weekly.addEventListener("submit", (e) => {
	e.preventDefault();
	let data = new FormData(weekly);
	let income = data.get("amount");
	let remaining = income;
	console.log(remaining);

	remainingParagraph.innerText = `Remaining: ${remaining}`;
	expenses.addEventListener("submit", (e) => {
		e.preventDefault();
		let data2 = new FormData(expenses);
		let expense = data2.get("category");
		let number = data2.get("amount");
		remaining = remaining - number;
		console.log(remaining);
		remainingParagraph.innerText = `Remaining: ${remaining}`;
		if (expense === "entertainment") {
		}
	});
});
