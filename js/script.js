let rateElement = document.querySelector(".js-rateElement");
let amountElement = document.querySelector(".js-amountElement");
let resultElement = document.querySelector(".js-resultElement");
let formElement = document.querySelector(".js-form");

let rateEUR = 4.5166;
let rateUSD = 4.2569;
let rateGBP = 5.2283;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let rate = +rateElement.value;
    let amount = amountElement.value;

    let result;
    switch (amount) {
        case "EUR":
            result = rate / rateEUR;
            break;
        case "USD":
            result = rate / rateUSD;
            break;
        case "GBP":
            result = rate / rateGBP;
            break;
    }
    resultElement.innerText = `${rate.toFixed(2)} PLN =  ${result.toFixed(2)} ${amount}`
});
