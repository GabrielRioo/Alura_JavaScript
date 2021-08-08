// var pacientes = document.querySelectorAll(".paciente");

// pacientes.forEach((element) => {
//     var td = document.querySelector("td");
//     td.addEventListener("click", removerLinha())
// })

// function removerLinha() {

// }

// ------------------------------------
var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");

tabela.addEventListener('dblclick', (event) => {
    console.log("aqui")
    
     event.target.parentNode.classList.add('fade-out');
     setTimeout(() => {
         event.target.parentNode.remove();
     }, 500);
})

// pacientes.forEach((paciente) => {
//     paciente.addEventListener('dblclick', () => {
//         this.remove();
//     })
// })

// console.log(pacientes);