var titulo = document.querySelector(".titulo");
titulo.textContent = "Batata";

var paciente = document.querySelector("#primeiro-paciente");

var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;

var tdImc = peso / (altura * altura);
var imc = paciente.querySelector(".info-imc");


var pesoValido = true;
var alturaValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log('Peso invalido');
    pesoValido = false;
    imc.textContent = 'Peso invalido!';
}

if (altura <= 0 || altura >= 3.00) {
    console.log('Altura invalida');
    alturaValida = false;
    imc.textContent = 'Altura invalida!';
}

if (alturaValida && pesoValido) {
    imc.textContent = tdImc;
}


console.log(tdImc);
console.log(paciente);
