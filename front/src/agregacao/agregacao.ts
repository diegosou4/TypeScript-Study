export class Produto{
    constructor(
       private _name:string,
       private _price:number,
    ){}
    get name():string{
        return this._name;
    }
    get price():number{
        return this._price;
    }
}


export class CarrinhodeCompras {
    private readonly produtos: Produto[] = [];
    
    quantidade(): number {
        return this.produtos.length;
    }
    total(): number {
        return this.produtos.reduce((soma,produto) => soma + produto.price,0);
    }
    inserirProduto(...produtos:Produto[]): void {
        for(const produto of produtos) {
            this.produtos.push(produto);
        }
    }
}


const produto1 = new Produto('Tenis', 49.9);
const produto2 = new Produto('Tenis', 56.9);

const carrinho = new CarrinhodeCompras();
carrinho.inserirProduto(produto1, produto2);
console.log(carrinho.total());