"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empresa {
    constructor(funcionarios, endereco, razaoSocial, nomeFantasia, cnpj, telefones) {
        this.funcionarios = funcionarios;
        this.telefones = telefones;
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
        this.endereco = endereco;
        this.funcionario = funcionarios;
        this.telefone = telefones;
    }
}
exports.default = Empresa;
