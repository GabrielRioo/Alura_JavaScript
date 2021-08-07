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

  var tdImc = calculaImc(peso, altura);
  var imc = paciente.querySelector(".info-imc");

  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);

  if (!pesoValido) {
    console.log("Peso invalido");
    pesoValido = false;
    imc.textContent = "Peso invalido!";

    paciente.classList.add("paciente-invalido");
  }

  if (!alturaValida) {
    console.log("Altura invalida");
    alturaValida = false;
    imc.textContent = "Altura invalida!";

    paciente.classList.add("paciente-invalido");
  }

  if (alturaValida && pesoValido) {
    imc.textContent = tdImc;
  }
}

function validaPeso(peso) {
  if (peso >= 0 && peso <= 1000) {
    return true;
  }
  else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 3.0) {
    return true;
  }
  else {
    return false;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);

  return imc.toFixed(2);
}
// console.log(tdImc);
// console.log(paciente);
