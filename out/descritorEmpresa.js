"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Descritor {
    descrever(empresa) {
        console.log(`Razão social: ${empresa.razaoSocial}`);
        console.log(`Nome fantasia:${empresa.nomeFantasia}`);
        console.log(`cnpj: ${empresa.cnpj}`);
        console.log("Endereco");
        console.log(`Rua: ${empresa.endereco.rua} Bairro: ${empresa.endereco.bairro} Cidade: ${empresa.endereco.cidade} numero: ${empresa.endereco.numero}`);
        console.log("\nfuncionários:");
        empresa.funcionarios.forEach(funcionario => {
            console.log(`Nome: ${funcionario.nome}`);
            console.log(`Matrícula: ${funcionario.matricula}`);
            console.log(`CPF: ${funcionario.cpf}`);
            console.log(`Rua: ${funcionario.endereco.rua} Bairro: ${funcionario.endereco.bairro} Cidade: ${funcionario.endereco.cidade} numero: ${funcionario.endereco.numero}`);
        });
    }
}
exports.default = Descritor;
