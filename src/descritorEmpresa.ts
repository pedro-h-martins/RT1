import Empresa from "./empresa";

export default class Descritor {
    descrever(empresa: Empresa): void {
        console.log(`Razão social: ${empresa.razaoSocial}`)
        console.log(`Nome fantasia:${empresa.nomeFantasia}`)
        console.log(`cnpj: ${empresa.cnpj}`)
        
        console.log("Endereco") 
        console.log(`Rua: ${empresa.endereco.rua} Bairro: ${empresa.endereco.bairro} Cidade: ${empresa.endereco.cidade} numero: ${empresa.endereco.numero}`);
        
        console.log("\n funcionários:");
        empresa.funcionarios.forEach(funcionario => {
            console.log(`Nome: ${funcionario.nome}`);
            console.log(`Matrícula: ${funcionario.matricula}`)
            console.log(`cpf: ${funcionario.cpf}`)
            console.log(`Rua: ${funcionario.endereco.rua} Bairro: ${funcionario.endereco.bairro} Cidade: ${funcionario.endereco.cidade} numero: ${funcionario.endereco.numero}`);
        })
    }
}