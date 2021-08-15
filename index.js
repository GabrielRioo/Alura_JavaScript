import { Cliente } from './Cliente.js'
import { ContaCorrente } from './Conta/ContaCorrente.js'
import { ContaPoupanca } from './Conta/ContaPoupanca.js';
import { ContaSalario } from './Conta/ContaSalario.js';

const cliente1 = new Cliente('Gabriel', 11122233344);
const contaCorrenteGabriel = new ContaCorrente(cliente1, 1001);

contaCorrenteGabriel.depositar(300);
contaCorrenteGabriel.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);
console.log(contaPoupanca);
console.log(contaCorrenteGabriel);
