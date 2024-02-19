const container = document.querySelector('.container');
const calculator = document.getElementById('calculator');
const currency = document.getElementById('currency');
const length = document.getElementById('length');
const weight = document.getElementById('weight');
const temperature = document.getElementById('temperature');

let changeColor = (element) => {
    const color = window.getComputedStyle(element).backgroundColor; // rgb(-,-,-);
    container.style.backgroundColor = color;
    console.log(color);
}

calculator.addEventListener("click", (e) => {
    e.preventDefault();
    changeColor(calculator);
})

currency.addEventListener("click", (e) => {
    e.preventDefault();
    changeColor(currency);
})

length.addEventListener("click", (e) => {
    e.preventDefault();
    changeColor(length);
})

weight.addEventListener("click", (e) => {
    e.preventDefault();
    changeColor(weight);
})

temperature.addEventListener("click", (e) => {
    e.preventDefault();
    changeColor(temperature);
})





