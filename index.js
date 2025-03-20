const btn = document.querySelector("button");
const bill = document.querySelector("#bill");
const tip = document.querySelector("#tip");
const total = document.querySelector("#total");

function getTotal() {
  const tipAmount = (bill.value * tip.value) / 100;
  const totalAmount = Number(bill.value) + tipAmount;
  total.innerHTML = totalAmount
}

btn.addEventListener("click", getTotal);
