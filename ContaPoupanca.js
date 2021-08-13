

export class ContaPoupanca {
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
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