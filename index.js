import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Funcionario } from "./Funcionario/Funcionario.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Gabriel", 10000, 12345678900);
diretor.cadastrarSenha("123456789");

const gerente = new Gerente("Camila", 5000, 98765432100);
gerente.cadastrarSenha("123");

const diretorLogado = SistemaAutenticacao.login(diretor, "123456789");
const gerenteLogado = SistemaAutenticacao.login(gerente, "123");

console.log(`diretor: ${diretorLogado}`);
console.log(`gerente: ${gerenteLogado}`);
// ------------------------------------------------

// import { Cliente } from './Cliente.js'
// import { ContaCorrente } from './Conta/ContaCorrente.js'
// import { ContaPoupanca } from './Conta/ContaPoupanca.js';
// import { ContaSalario } from './Conta/ContaSalario.js';

// const cliente1 = new Cliente('Gabriel', 11122233344);
// const contaCorrenteGabriel = new ContaCorrente(cliente1, 1001);

// contaCorrenteGabriel.depositar(300);
// contaCorrenteGabriel.sacar(100);

// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

// const contaSalario = new ContaSalario(cliente1);
// contaSalario.depositar(100);
// contaSalario.sacar(10);

// console.log(contaSalario);
// console.log(contaPoupanca);
// console.log(contaCorrenteGabriel);
