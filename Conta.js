// classe abstrata
export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error("Você nao deveria instanciar um objeto do tipo conta");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    sacar(valor) {
        let taxa = 1;
        return this._sacar(taxa, valor);
        
    }

    _sacar(taxa, valor) {
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado;

            console.log(`Saque de R$${valor}`);
            return valorSacado;
        }

        console.log(`Saldo insuficiente`);
        return 0;
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