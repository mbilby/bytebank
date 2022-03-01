import {Cliente} from "./Cliente.js"
import {Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./Funcionarios/SistemaDeAutenticacao.js";


const gerente = new Gerente("Marcelo", 10000, 43001345130);
const diretor = new Diretor("Eduardo", 20000, 23456172890);
const cliente = new Cliente("Fernanda", 55566644422, "12345");

gerente.cadastrarSenha("123");
diretor.cadastrarSenha("123456");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "12345");
console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);