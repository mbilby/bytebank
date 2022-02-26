import {Cliente} from "./Cliente.js"
import {Contacorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js"
import {Conta} from "./Conta.js"



const cliente1 = new Cliente("Marcelo", 11199966623)
//const cliente2 = new Cliente("Fernanda", 77766644412)

const contaCorrenteDoMarcelo = new Conta(100, cliente1, 1001)
//const contaCorrenteDaFernanda = new  Contae(200, cliente2)

//contaPoupancaMarcelo.depositar(400, cliente1)
//contaPoupancaMarcelo.transferir(100, cliente2)

const contaPoupanca = new Conta(50, cliente1, 1001)

contaCorrenteDoMarcelo.depositar(100) 
contaPoupanca.depositar(250)

//contaCorrenteDoMarcelo.transferir(50, contaCorrenteDaFernanda)
//console.log(contaCorrenteDoMarcelo)
//console.log(contaCorrenteDaFernanda)
//console.log("Número de Clientes: ", Contacorrente.numeroContas)


console.log(contaPoupanca)
console.log(contaCorrenteDoMarcelo)
