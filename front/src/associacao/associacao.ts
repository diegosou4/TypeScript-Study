export abstract class Ferramenta
{
    constructor(
       private _name:string,
    ){
    }
    getNome():string { return this._name }
    abstract write():void;
} 

export class Caneta extends Ferramenta{
    write(): void { console.log(`Esta escrevendo`); }    
}

export class Maquina extends Ferramenta{
    write(): void { console.log(`Esta digitando`); }   
}


export class Escritor {
    private ferramenta:Ferramenta | null = null;
    constructor(
        private _name:string,
    ){}
    getNome():string {
        return this._name;
    }
    setFerramenta(ferramenta: Ferramenta){
        this.ferramenta = ferramenta;
    }
    escrever(): void{
        if(this.ferramenta)
            this.ferramenta.write();
        else
            console.log('Nao posso escrever sem uma ferramenta');
    }
}

const ferramenta = new Maquina('Maquina de Escrever');
const caneta =  new Caneta('Caneta Azull');

const escritor = new Escritor('Rogerin');
escritor.escrever();
escritor.setFerramenta(caneta);
escritor.escrever();