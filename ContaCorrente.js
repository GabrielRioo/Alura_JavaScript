import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(cliente, agencia) {
        super(0 , cliente, agencia); // chama o contrutor da classe pai
        ContaCorrente.numeroDeContas += 1;
    }

    
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

    // sobreescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.1;
        return super._sacar(taxa, valor);
    }
}