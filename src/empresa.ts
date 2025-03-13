import Endereco from "./endereco"
import Funcionario from "./funcionario"
import Telefone from "./telefone"

export default class Empresa {
    public razaoSocial: string
    public nomeFantasia: string
    public cnpj: string
    public endereco: Endereco
    public funcionario: Funcionario[]
    public telefone: Telefone[]
    constructor(public funcionarios: Funcionario[], endereco: Endereco, razaoSocial: string, nomeFantasia: string, cnpj: string, public telefones: Telefone[]) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
        this.endereco = endereco;
        this.funcionario = funcionarios;
        this.telefone = telefones;
    }
}