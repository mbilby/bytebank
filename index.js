import {Cliente} from "./Cliente.js"
import {Contacorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js"



const cliente1 = new Cliente("Marcelo", 11199966623)
const cliente2 = new Cliente("Fernanda", 77766644412)

const contaPoupancaMarcelo = new ContaPoupanca(100, "Marcelo", 1001)
const contaPoupancaFernanda = new ContaPoupanca(0, "Fernanda", 1002)

//const contaCorrenteDoMarcelo = new Contacorrente(1001, cliente1)
//const contaCorrenteDaFernanda = new  Contacorrente(1002, cliente2)

contaPoupancaMarcelo.depositar(400)
contaPoupancaMarcelo.transferir(100, contaPoupancaFernanda)

//contaCorrenteDoMarcelo.depositar(100) 
//contaCorrenteDoMarcelo.depositar(250)

//contaCorrenteDoMarcelo.transferir(50, contaCorrenteDaFernanda)
//console.log(contaCorrenteDoMarcelo)
//console.log(contaCorrenteDaFernanda)
//console.log("Número de Clientes: ", Contacorrente.numeroContas)


console.log(contaPoupancaFernanda)
