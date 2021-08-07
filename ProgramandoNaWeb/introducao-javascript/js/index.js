var titulo = document.querySelector(".titulo");
titulo.textContent = "Batata";

titulo.addEventListener("click", () => {
  console.log("fui clicado");
});

var pacientes = document.querySelectorAll(".paciente");
// console.log(pacientes);

for (let i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var peso = paciente.querySelector(".info-peso").textContent;
  var altura = paciente.querySelector(".info-altura").textContent;

  var tdImc = peso / (altura * altura);
  var imc = paciente.querySelector(".info-imc");

  var pesoValido = true;
  var alturaValida = true;

  if (peso <= 0 || peso >= 1000) {
    console.log("Peso invalido");
    pesoValido = false;
    imc.textContent = "Peso invalido!";

    paciente.classList.add("paciente-invalido");
  }

  if (altura <= 0 || altura >= 3.0) {
    console.log("Altura invalida");
    alturaValida = false;
    imc.textContent = "Altura invalida!";

    paciente.classList.add("paciente-invalido");
  }

  if (alturaValida && pesoValido) {
    imc.textContent = tdImc.toFixed(2);
  }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", (event) => {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  var pacienteTr = document.createElement("tr");
  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  console.log(pacienteTr);

});

// console.log(tdImc);
// console.log(paciente);
