import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  
  static numeroContas = 0;

  constructor(saldoInicial, cliente, agencia) {
      super(saldoInicial , cliente, agencia);

      ContaCorrente.numeroContas += 1;
  
    
  }
  // Sobrescrevendo o comportamento de SACAR

  sacar(valor) {
    
    let taxa = 1.1;
    return this._sacar(valor, taxa);
  
  }
  
}