import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js';

const cliente1 = new Cliente('Gabriel', 11122233344);
const contaCorrenteGabriel = new ContaCorrente(1001, cliente1);

contaCorrenteGabriel.depositar(300);
contaCorrenteGabriel.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);


console.log(contaPoupanca);
