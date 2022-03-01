export class Funcionarios {
  constructor(nome, salario, cpf) {
    this._nome;
    this._cpf;
    this._salario;
    
    this._bonificacao = 1;
    this._senha;
  }

  get senha() {
    return this._senha;
  }

  autenticar(senha) {
    return senha == this._senha;
  }

  cadastrarSenha(senha) {
    this._senha = senha;
  }
}