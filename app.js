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

    showOutput(
      `Your Loss is ${loss} and Loss Percentage is ${lossPercentage.toFixed(
        2
      )}%`
    );
    // outputEl.innerText = `Your Loss is ${loss} and Loss Percentage is ${lossPercentage.toFixed(
    //   2
    // )}%`;
  } else if (current > initial) {
    let profit = (current - initial) * quantity;
    let profitPercentage = (profit / (initial * quantity)) * 100;
    showOutput(
      `Your Profit is ${profit} and Loss Percentage is ${profitPercentage.toFixed(
        2
      )}%`
    );
  } else {
    showOutput(`Well You Have Nothing To 'LOOSE' or 'GAIN'`);
  }
}
function showOutput(msg) {
  outputEl.innerText = msg;
}
submitButton.addEventListener("click", clickHandler);
