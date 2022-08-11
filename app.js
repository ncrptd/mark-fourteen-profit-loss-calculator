let ipInput = document.querySelector("#initial-price");
let quantityInput = document.querySelector("#quantity");
let cpInput = document.querySelector("#current-price");
let submitButton = document.querySelector("#submit-button");
let outputEl = document.querySelector(".output");

function clickHandler() {
  let initialPrice = +ipInput.value;
  let quantityOfStocks = +quantityInput.value;
  let currentPrice = +cpInput.value;
  calculateProfitAndLoss(initialPrice, quantityOfStocks, currentPrice);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    let loss = (initial - current) * quantity;
    let lossPercentage = (loss / (initial * quantity)) * 100;
    let color = "red";
    showOutput(
      `Your Loss is ${loss} and Loss Percentage is ${lossPercentage.toFixed()}%`,
      color
    );
  } else if (current > initial) {
    let profit = (current - initial) * quantity;
    let profitPercentage = (profit / (initial * quantity)) * 100;
    let color = "green";
    showOutput(
      `Your Profit is ${profit} and Profit Percentage is ${profitPercentage.toFixed()}%`,
      color
    );
  } else {
    showOutput(`Well You Have Nothing To 'LOOSE' or 'GAIN'`);
  }
}
function showOutput(msg, color) {
  outputEl.innerText = msg;
  outputEl.style.color = color;
}
submitButton.addEventListener("click", clickHandler);
