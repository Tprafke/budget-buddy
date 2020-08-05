"use strict";

let weekly = document.querySelector(".weekly");
let expenseContainer = document.querySelector(".expense-container");
let expenses = document.querySelector(".expenses");
let remainingParagraph = document.querySelector(".remaining");

let main = document.querySelector(".main");

weekly.addEventListener("submit", (e) => {
  e.preventDefault();
  expenseContainer.innerHTML = "";
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
      let print = document.createElement("div");
      print.innerText = ` Entertainment -$${number}`;
      expenseContainer.append(print);
    } else if (expense === "food") {
      let print = document.createElement("div");
      print.innerText = ` Grub -$${number}`;
      expenseContainer.append(print);
    } else if (expense === "clothing") {
      let print = document.createElement("div");
      print.innerText = ` Drip -$${number}`;
      expenseContainer.append(print);
    } else {
      let print = document.createElement("div");
      print.innerText = `Bills -$${number}`;
      expenseContainer.append(print);
    }
  });
  weekly.reset();
});

main.reset();
