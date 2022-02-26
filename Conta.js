export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia
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