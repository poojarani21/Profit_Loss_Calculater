var initialPrice = document.querySelector("#initial-price");
var stockQantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stockQantity.value);
    var curr = Number(currentPrice.value);
    calculateprofitAndLoss(ip, qty, curr);
}

function calculateprofitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        showOutput('hey the loss is' + loss + 'And the percentage of loss is' + lossPercentage + "%" + "😒");
        outputBox.style.color = 'red';

    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        showOutput('hey the profit is' + profit + 'And the percentage of profit is' + profitPercentage + "%" + "😎");
        outputBox.style.color = 'green';

    } else {
        showOutput("No pain no gain and no gain no pain");
    }
}

function showOutput(message) {
    outputBox.innerHTML = message;
}