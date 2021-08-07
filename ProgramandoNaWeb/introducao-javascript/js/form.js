var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", (event) => {
  event.preventDefault();

  // Extraindo informaçoes do paciente do formm
  var form = document.querySelector("#form-adiciona");
  var paciente = obtemPacienteDoFormulario(form);

  // Cria a tr e a td do paciente
  var pacienteTr = montaTr(paciente);
  
  // Valida os dados da tabela antes de adicionar
  if (!validaPaciente(paciente)) {
    console.log("Paciente Invalido");
    return;
  }

  // Adicionando o paciennte na tabela.
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  form.reset();

  console.log(pacienteTr);

});

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  }

  return paciente;
}

function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");

  td.textContent = dado;
  td.classList.add(classe);


  return td;
}

function validaPaciente(paciente) {
  if (validaPeso(paciente.peso)) {
    return true;
  }
  else {
    return false;
  }
}