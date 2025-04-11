type TemNome = { nome: string};
type TemSobrenome = { sobrenome: string};
type TemIdade = { idade: number};

type Persona = TemNome & TemSobrenome & TemIdade // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A'
type Intersecao = AB & AC & AD;


const persona: Persona = {
    nome: 'Diego',
    sobrenome: 'Souza',
    idade: 18,
}