

export class Empresa {
    public readonly nome: string;
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;
    constructor(nome: string, cnpj: string){
        this.nome = nome;
        this.cnpj = cnpj;
    }
    getcnpj(): string {
        return this.cnpj;
    }
    setColaborador(colaborador : Colaborador): void {
        this.colaboradores.push(colaborador);
    }
    showColaboradores(): void {
        for (const colaborador of this.colaboradores){
            console.log(colaborador);
        }
    }
    public getNome(): string{
        return this.nome;
    }
}


export class Colaborador {
    constructor(
        public readonly nome:string, 
        public readonly sobrenome:string 
    ) {}
}

const empresa1 = new Empresa('Youtube', '11.111.111/00001-11');
const colaborador1 = new Colaborador('Diego', 'Souza');
const colaborador2 = new Colaborador('Joao', 'Souza');
const colaborador3 = new Colaborador('Jose', 'Souza');

empresa1.setColaborador(colaborador1);
empresa1.setColaborador(colaborador2);
empresa1.setColaborador(colaborador3);


console.log(empresa1.nome);
console.log(empresa1.getNome())