//Classe Abstrata
export class Conta {

  constructor(saldoInicial, cliente, agencia) {
    if (this.constructor == Conta) {
      throw new Error("Você não deveria instaciar um objeto do tipo conta diretamente");
    }
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
    
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente)
      this._cliente = novoValor;
  }

  get cliente(){
    return this._cliente;
  }

  // #saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields

  get saldo() {
    return this._saldo;
  }

  sacar(valor) {

  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if (this._saldo >= valor) {
      this._saldo -= valorSacado
      return valorSacado;
    } else {
      console.log('Você não tem saldo suficiente')
    }
    
  }

  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor;
    }
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado); 
    
  }
}