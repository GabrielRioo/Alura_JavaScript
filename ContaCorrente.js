import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;    
        ContaCorrente.numeroDeContas += 1;
    }

    static numeroDeContas = 0;
    
    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    _saldo = 0;

    get saldo() {
        return this._saldo;
    }


    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;

            console.log(`Saque de R$${valor}`);
            return valor;
        }
        console.log(`Saldo insuficiente`);
    }

    depositar(valor) {
        if(valor <= 0) {
            return console.log(`Deposito invalido`);
        }

        this._saldo += valor;
        console.log(`Depositado R$${valor}`)
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}