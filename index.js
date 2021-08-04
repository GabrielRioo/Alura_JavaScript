import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'

const cliente1 = new Cliente('Gabriel', 11122233344);
// cliente1.nome = 'Gabriel';
// cliente1.cpf = 11122233344;

const contaCorrenteGabriel = new ContaCorrente(1001, cliente1);
// contaCorrenteGabriel._saldo = 100;
// contaCorrenteGabriel.agencia = 1001;
// contaCorrenteGabriel.cliente = cliente1;

// console.log(`Saldo da conta do ${cliente1.nome} = ${contaCorrenteGabriel._saldo}`);

// depositando mais valor ao saldo do Gabriel
contaCorrenteGabriel.depositar(300);

// sacar um valor do saldo
const valorSacado = contaCorrenteGabriel.sacar(200);
// console.log(valorSacado);

// console.log(`Saldo da conta do ${cliente1.nome} = ${contaCorrenteGabriel._saldo}`);

// console.log(contaCorrenteGabriel);

// --------------------------------------------------------------

const cliente2 = new Cliente("Camila", 22233344455);

const contaCorrenteCamila = new ContaCorrente(1001, cliente2);
// contaCorrenteCamila.cliente = new Cliente();

// contaCorrenteCamila.saldo = 0;
// contaCorrenteCamila.agencia = 1001;

// const conta2 = new ContaCorrente();
// conta2.cliente = cliente2;
// conta2.agencia = 1002;

contaCorrenteGabriel.transferir(50, contaCorrenteCamila)

// console.log(contaCorrenteGabriel)
console.log();
console.log(ContaCorrente.numeroDeContas);

// console.log(cliente1);
// console.log(cliente2);