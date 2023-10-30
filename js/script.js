{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.5166;
        const rateUSD = 4.2569;
        const rateGBP = 5.2283;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;

            case "GBP":
                return amount / rateGBP;

        }
    };

    const resultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-resultElement");
        resultElement.innerText = `${amount.toFixed(2)} PLN =  ${result.toFixed(2)} ${currency}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currencyElement");
        const amountElement = document.querySelector(".js-amountElement");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        resultText(amount, result, currency);

    };


    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit)
    };




    init();


}

/*
const cleanResult = (resultText) => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("reset")
    resultElement.innerText = '';
};*/