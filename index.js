// Selecting the button element
const btn = document.querySelector("button");

// Selecting the input field for bill amount
const bill = document.querySelector("#bill");

// Selecting the input field for tip percentage
const tip = document.querySelector("#tip");

// Selecting the element where the total amount will be displayed
const total = document.querySelector("#total");

// Function to calculate the total bill including tip
function getTotal() {
  // Calculating the tip amount based on the bill and tip percentage
  const tipAmount = (bill.value * tip.value) / 100;

  // Calculating the total amount by adding the tip to the bill
  const totalAmount = Number(bill.value) + tipAmount;

  // Displaying the total amount with two decimal places
  total.innerHTML = "Total: " + "$" + totalAmount.toFixed(2);
}

// Adding an event listener to the button to trigger the getTotal function on click
btn.addEventListener("click", getTotal);
