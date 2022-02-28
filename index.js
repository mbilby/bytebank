import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js"




const cliente1 = new Cliente("Marcelo", 11199966623)
//const cliente2 = new Cliente("Fernanda", 77766644412)

const contaCorrenteDoMarcelo = new ContaCorrente(100, cliente1, 1001)
//const contaCorrenteDaFernanda = new  Contae(200, cliente2)

//contaPoupancaMarcelo.depositar(400, cliente1)
//contaPoupancaMarcelo.transferir(100, cliente2)

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)

//contaCorrenteDoMarcelo.depositar(100) 
contaPoupanca.depositar(250)
contaCorrenteDoMarcelo.sacar(10)


//contaCorrenteDoMarcelo.transferir(50, contaCorrenteDaFernanda)
//console.log(contaCorrenteDoMarcelo)
//console.log(contaCorrenteDaFernanda)
//console.log("Número de Clientes: ", Contacorrente.numeroContas)


//console.log(contaPoupanca)
console.log(contaCorrenteDoMarcelo)
