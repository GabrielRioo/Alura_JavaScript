var titulo = document.querySelector(".titulo");
titulo.textContent = "Batata";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso").textContent;
var tdAltura = paciente.querySelector(".info-altura").textContent;

var imc = tdPeso / (tdAltura * tdAltura);

paciente.querySelector(".info-imc").textContent = imc;



console.log(paciente);
console.log(tdPeso.textContent);
console.log(imc);
