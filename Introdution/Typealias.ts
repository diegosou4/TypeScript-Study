


type Idade = number;
type Name = string;

type CorRGB = 'Vermelho' | 'Verde' | 'AZUL';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';

type CorPreferida = CorRGB | CorCMYK;

type Pessoa = {
    nome: Name,
    idade: Idade,
    salario: number,
    corPreferida?: CorPreferida
};



const pessoa: Pessoa = {
    nome: 'Diego',
    idade: 18,
    salario: 300,
};

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
    pessoa.corPreferida = cor;
    return pessoa
}

setCorPreferida(pessoa, 'AZUL')