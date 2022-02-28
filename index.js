import {Cliente} from "./Cliente.js"
import {Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./Funcionarios/SistemaDeAutenticacao.js";


const gerente = new Gerente("Marcelo", 10000, 43001345130);
const diretor = new Diretor("Eduardo", 20000, 23456172890);
diretor.cadastrarSenha("123456")

const estaLogado = SistemaAutenticacao.login(diretor, "123456")

console.log(estaLogado)