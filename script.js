const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const inputOne = document.querySelector("#calculoUno");
const inputTwo = document.querySelector("#calculoDos");
const btn = document.querySelector("#btnCalcular");
const result = document.querySelector("#result");

form.addEventListener("submit", sumarInputValues);

function sumarInputValues(e) {
    // console.log({ e });
    e.preventDefault();
    const sumaInputs = Number(inputOne.value) + Number(inputTwo.value);
    result.innerHTML = "Resultado: " + sumaInputs;
}
