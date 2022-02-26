import {Cliente} from "./Cliente.js"
import { Conta } from "./Conta.js";

export class Contacorrente extends Conta {
  
  static numeroContas = 0;

  constructor(cliente, agencia) {
    super(0, cliente, agencia)
    Contacorrente.numeroContas += 1
  
  }
}