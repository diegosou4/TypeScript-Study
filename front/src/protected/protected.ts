

export class Empresa {
    public readonly nome: string;
    protected readonly colaboradores: Colaborador[] = [];
    private readonly cnpj: string;
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

export class Udemy extends Empresa {
    constructor(){
        super('Udemy', '11.1111.111/00001-11');
    }

    popColaborador(): Colaborador | null {
        const colaborador  = this.colaboradores.pop();
        if(colaborador) return colaborador;
        return null;
    }
}

const empresa1 = new Udemy();
const colaborador = new Colaborador('Diego', 'Souza');
const colaborador2 = new Colaborador('Joao', 'Americo');
const colaborador3 = new Colaborador('Padre', 'Bispo');


empresa1.setColaborador(colaborador);
empresa1.setColaborador(colaborador2);
empresa1.setColaborador(colaborador3);

console.log(empresa1);


console.log(empresa1.popColaborador());
console.log(empresa1.popColaborador());
console.log(empresa1.popColaborador());