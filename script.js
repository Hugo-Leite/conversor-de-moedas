const btn = document.querySelector("#btn-convert");
const input = document.querySelector("#value-to-convert");
const convertFrom = document.querySelector("#convert-from");
const convertTo = document.querySelector("#convert-to");

const imgCurrencyToBeConverted = document.querySelector("#img-currency-to-be-converted");
const currencyToBeConverted = document.querySelector("#currency-to-be-converted");
const currencyValue = document.querySelector("#currency-value");
const dollarSignCurrencyValue = document.querySelector("#dollar-sign-currency-value");

const imgConvertedCurrency = document.querySelector("#img-converted-currency");
const convertedCurrency = document.querySelector("#converted-currency");
const convertedValue = document.querySelector("#converted-value");
const dollarSignConvertedValue = document.querySelector("#dollar-sign-converted-value");

btn.addEventListener("click", calculate);

convertFrom.addEventListener("change", function () {
    currencyToBeConverted.textContent = convertFrom.value;

    if (convertFrom.value == "real") {
        imgCurrencyToBeConverted.src = "./assets/brasil.png";
    } else if (convertFrom.value == "dolar") {
        imgCurrencyToBeConverted.src = "./assets/estados-unidos.png";
    } else if (convertFrom.value == "euro") {
        imgCurrencyToBeConverted.src = "./assets/euro.png";
    } else if (convertFrom.value == "libra") {
        imgCurrencyToBeConverted.src = "./assets/libra.png";
    } else if (convertFrom.value == "bitcoin") {
        imgCurrencyToBeConverted.src = "./assets/bitcoin.png";
    }

    calculate();
});

convertTo.addEventListener("change", function () {
    convertedCurrency.textContent = convertTo.value;

    if (convertTo.value == "real") {
        imgConvertedCurrency.src = "./assets/brasil.png";
    } else if (convertTo.value == "dolar") {
        imgConvertedCurrency.src = "./assets/estados-unidos.png";
    } else if (convertTo.value == "euro") {
        imgConvertedCurrency.src = "./assets/euro.png";
    } else if (convertTo.value == "libra") {
        imgConvertedCurrency.src = "./assets/libra.png";
    } else if (convertTo.value == "bitcoin") {
        imgConvertedCurrency.src = "./assets/bitcoin.png";
    }

    calculate();
});

function calculate() {
    currencyValue.textContent = `${(input.value * 1).toFixed(2)}`;

    // de REAL para
    if (convertFrom.value == "real" && convertTo.value == "dolar") {
        convertedValue.textContent = `${(input.value / 4.94).toFixed(2)}`;
        dollarSignCurrencyValue.textContent = "R$";
        dollarSignConvertedValue.textContent = "US$";
    } else if (convertFrom.value == "real" && convertTo.value == "euro") {
        convertedValue.textContent = `${(input.value / 5.41).toFixed(2)}`;
        dollarSignCurrencyValue.textContent = "R$";
        dollarSignConvertedValue.textContent = "€";
    } else if (convertFrom.value == "real" && convertTo.value == "libra") {
        convertedValue.textContent = `${(input.value / 6.32).toFixed(2)}`;
        dollarSignCurrencyValue.textContent = "R$";
        dollarSignConvertedValue.textContent = "£";
    } else if (convertFrom.value == "real" && convertTo.value == "bitcoin") {
        convertedValue.textContent = `${(input.value / 331567.08).toFixed(6)}`;
        dollarSignCurrencyValue.textContent = "R$";
        dollarSignConvertedValue.textContent = "₿";
    } else if (convertFrom.value == "real" && convertTo.value == "real") {
        convertedValue.textContent = `${(input.value * 1).toFixed(2)}`;
        dollarSignCurrencyValue.textContent = "R$";
        dollarSignConvertedValue.textContent = "R$";
    }

    // de DOLAR para
    else if (convertFrom.value == "dolar" && convertTo.value == "dolar") {
        convertedValue.textContent = `${(input.value * 1).toFixed(2)}`;
        dollarSignCurrencyValue.textContent = "US$";
        dollarSignConvertedValue.textContent = "US$";
    } else if (convertFrom.value == "dolar" && convertTo.value == "euro") {
        convertedValue.textContent = `${(input.value / 1.09).toFixed(2)}`;
        dollarSignCurrencyValue.textContent = "US$";
        dollarSignConvertedValue.textContent = "€";
    } else if (convertFrom.value == "dolar" && convertTo.value == "libra") {
        convertedValue.textContent = `${(input.value / 1.28).toFixed(2)}`;
        dollarSignCurrencyValue.textContent = "US$";
        dollarSignConvertedValue.textContent = "£";
    } else if (convertFrom.value == "dolar" && convertTo.value == "bitcoin") {
        convertedValue.textContent = `${(input.value / 66978.4).toFixed(6)}`;
        dollarSignCurrencyValue.textContent = "US$";
        dollarSignConvertedValue.textContent = "₿";
    } else if (convertFrom.value == "dolar" && convertTo.value == "real") {
        convertedValue.textContent = `${(input.value / 0.2).toFixed(2)}`;
        dollarSignCurrencyValue.textContent = "US$";
        dollarSignConvertedValue.textContent = "R$";
    }

    // de EURO para
    else if (convertFrom.value == "euro" && convertTo.value == "dolar") {
        convertedValue.textContent = `${(input.value / 0.91).toFixed(2)}`;
        dollarSignCurrencyValue.textContent = "€";
        dollarSignConvertedValue.textContent = "US$";
    } else if (convertFrom.value == "euro" && convertTo.value == "euro") {
        convertedValue.textContent = `${(input.value * 1).toFixed(2)}`;
        dollarSignCurrencyValue.textContent = "€";
        dollarSignConvertedValue.textContent = "€";
    } else if (convertFrom.value == "euro" && convertTo.value == "libra") {
        convertedValue.textContent = `${(input.value / 1.17).toFixed(2)}`;
        dollarSignCurrencyValue.textContent = "€";
        dollarSignConvertedValue.textContent = "£";
    } else if (convertFrom.value == "euro" && convertTo.value == "bitcoin") {
        convertedValue.textContent = `${(input.value / 61334.76).toFixed(6)}`;
        dollarSignCurrencyValue.textContent = "€";
        dollarSignConvertedValue.textContent = "₿";
    } else if (convertFrom.value == "euro" && convertTo.value == "real") {
        convertedValue.textContent = `${(input.value / 0.19).toFixed(2)}`;
        dollarSignCurrencyValue.textContent = "€";
        dollarSignConvertedValue.textContent = "R$";
    }

    // de LIBRA para
    else if (convertFrom.value == "libra" && convertTo.value == "dolar") {
        convertedValue.textContent = `${(input.value / 0.78).toFixed(2)}`;
        dollarSignCurrencyValue.textContent = "£";
        dollarSignConvertedValue.textContent = "US$";
    } else if (convertFrom.value == "libra" && convertTo.value == "euro") {
        convertedValue.textContent = `${(input.value / 0.85).toFixed(2)}`;
        dollarSignCurrencyValue.textContent = "£";
        dollarSignConvertedValue.textContent = "€";
    } else if (convertFrom.value == "libra" && convertTo.value == "libra") {
        convertedValue.textContent = `${(input.value * 1).toFixed(2)}`;
        dollarSignCurrencyValue.textContent = "£";
        dollarSignConvertedValue.textContent = "£";
    } else if (convertFrom.value == "libra" && convertTo.value == "bitcoin") {
        convertedValue.textContent = `${(input.value / 52412.58).toFixed(6)}`;
        dollarSignCurrencyValue.textContent = "£";
        dollarSignConvertedValue.textContent = "₿";
    } else if (convertFrom.value == "libra" && convertTo.value == "real") {
        convertedValue.textContent = `${(input.value / 0.16).toFixed(2)}`;
        dollarSignCurrencyValue.textContent = "£";
        dollarSignConvertedValue.textContent = "R$";
    }

    // de BITCOIN para
    else if (convertFrom.value == "bitcoin" && convertTo.value == "dolar") {
        convertedValue.textContent = `${(input.value / 0.000015).toFixed(2)}`;
        dollarSignCurrencyValue.textContent = "₿";
        dollarSignConvertedValue.textContent = "US$";
    } else if (convertFrom.value == "bitcoin" && convertTo.value == "euro") {
        convertedValue.textContent = `${(input.value / 0.000016).toFixed(2)}`;
        dollarSignCurrencyValue.textContent = "₿";
        dollarSignConvertedValue.textContent = "€";
    } else if (convertFrom.value == "bitcoin" && convertTo.value == "libra") {
        convertedValue.textContent = `${(input.value / 0.000019).toFixed(2)}`;
        dollarSignCurrencyValue.textContent = "₿";
        dollarSignConvertedValue.textContent = "£";
    } else if (convertFrom.value == "bitcoin" && convertTo.value == "bitcoin") {
        convertedValue.textContent = `${(input.value * 1).toFixed(2)}`;
        dollarSignCurrencyValue.textContent = "₿";
        dollarSignConvertedValue.textContent = "₿";
    } else if (convertFrom.value == "bitcoin" && convertTo.value == "real") {
        convertedValue.textContent = `${(input.value / 0.000003).toFixed(2)}`;
        dollarSignCurrencyValue.textContent = "₿";
        dollarSignConvertedValue.textContent = "R$";
    }
}
