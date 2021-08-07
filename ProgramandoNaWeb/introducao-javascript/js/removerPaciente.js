// var pacientes = document.querySelectorAll(".paciente");

// pacientes.forEach((element) => {
//     var td = document.querySelector("td");
//     td.addEventListener("click", removerLinha())
// })

// function removerLinha() {

// }

// ------------------------------------
var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach((paciente) => {
    paciente.addEventListener('dblclick', () => {
        this.remove();
    })
})

console.log(pacientes);