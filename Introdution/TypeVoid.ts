
function semRetorno(...args: string[]): void{
    console.log(args.join(' '));
}

semRetorno('Diego','Souza');


const pesso = {
    nome: 'Diego',
    sobrenome: 'Souza',

    showName(): void {
        console.log(this.nome + ' ', this.sobrenome)
    },
};


pesso.showName();

export { pesso };