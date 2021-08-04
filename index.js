import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'

const cliente1 = new Cliente();
cliente1.nome = 'Gabriel';
cliente1.cpf = 11122233344;

const contaCorrenteGabriel = new ContaCorrente();
// contaCorrenteGabriel._saldo = 100;
contaCorrenteGabriel.agencia = 1001;
contaCorrenteGabriel.cliente = cliente1;

console.log(`Saldo da conta do ${cliente1.nome} = ${contaCorrenteGabriel._saldo}`);

// depositando mais valor ao saldo do Gabriel
contaCorrenteGabriel.depositar(300);

// sacar um valor do saldo
const valorSacado = contaCorrenteGabriel.sacar(200);
console.log(valorSacado);

console.log(`Saldo da conta do ${cliente1.nome} = ${contaCorrenteGabriel._saldo}`);

console.log(contaCorrenteGabriel);

// --------------------------------------------------------------

const cliente2 = new Cliente();
cliente2.nome = "Camila";
cliente2.cpf = 22233344455;

const contaCorrenteCamila = new ContaCorrente();
// contaCorrenteCamila.cliente = new Cliente();

contaCorrenteCamila.saldo = 0;
contaCorrenteCamila.agencia = 1001;

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 1002;

contaCorrenteGabriel.transferir(50, conta2)

// console.log(contaCorrenteGabriel)
console.log(conta2);

// console.log(cliente1);
// console.log(cliente2);