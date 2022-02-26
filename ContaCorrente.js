import {Cliente} from "./Cliente.js"

export class Contacorrente {
  static numeroContas = 0;

  set cliente(novoValor) {
    if (novoValor instanceof Cliente)
      this._cliente = novoValor
  }

  get cliente(){
    return this._cliente
  }

  // #saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields

  get saldo() {
    return this._saldo
  }

  constructor(agencia, cliente) {
    this._cliente = cliente
    this.agencia = agencia
    this._saldo = 0
    Contacorrente.numeroContas += 1
  }

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor
      return valor
    } else {
      console.log('Você não tem saldo suficiente')
    }
    
  }

  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor
    }
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado); 
    
  }
}