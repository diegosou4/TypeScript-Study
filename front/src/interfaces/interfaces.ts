interface TipoNome   {
    nome: string;
    sobrenome: string;
    nomeCompleto(): string;
}

interface TipoIdade {
    idade: number;
}

interface TipoPessoa2 extends TipoNome, TipoIdade{} 

export class Pessoa implements TipoPessoa2 {
    constructor(
    public nome: string,public sobrenome: string, public idade:number) {  
    }
     nomeCompleto(): string{
        return this.nome + ' ' + this.sobrenome;
    }
}


const pessoa = new Pessoa('Diego', 'Souza', 18)
console.log(pessoa.nomeCompleto());
console.log(pessoa.idade);