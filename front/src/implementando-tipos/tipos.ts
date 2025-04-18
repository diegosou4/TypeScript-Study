type TipoPessoa =  {
    nome: string;
    sobrenome: string;
    nomeCompleto(): string;
}

type Idade = {
    idade: number;
}

export class Pessoa implements TipoPessoa, Idade {
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