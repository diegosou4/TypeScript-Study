import {TransacaoPagamento, TransacaoStatus} from './fetchData'


export default class Vendas{
    public listvendas: Venda[] = []
    constructor(
    ){
       
    }
    public currentVenda(index: number): Venda | null{
        if(index > this.listvendas.length 
            || this.listvendas[index] === null
        )
            return null;
        return this.listvendas[index] 
    }
    public newVenda(venda: Venda): void{
        this.listvendas.push(venda)
    }
    public total(): string{
        const total = this.listvendas.reduce((acc, venda) => {
            if(isNaN(venda.valor) === false){
                return acc + venda.valor;
            }
        return acc;
        },0);
        return total.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
        });
    }
    public Estatiticas(key: keyof TipoVenda, status: string): number{
        const total = this.listvendas.reduce((acc,venda) => {
            const val = venda[key];
            if(val === status)
                return acc + 1;
        return acc;
        }, 0);
        return total;
    }

}

const tdList: string[] = ["Nome", "Email", "Compra", "Pagamento", "Status"]

export interface TipoVenda {
    status: TransacaoStatus;
    id: number;
    data: Date;
    nome: string;
    pagamento: TransacaoPagamento;
    email: string;
    valor: number;
    ncliente: boolean;
}



export class Venda implements TipoVenda{
    constructor(
        public readonly status: TransacaoStatus,
        public readonly id: number,
        public readonly data: Date,
        public readonly nome: string,
        public readonly pagamento: TransacaoPagamento,
        public readonly email: string,
        public readonly valor: number ,
        public readonly ncliente: boolean,
    ){
        this.valor = Number.isNaN(valor) ? 0 : valor;
    }
}


export class estaticasComponents {
    constructor(){

    }
    static gethr(): HTMLHRElement{
        const hr = document.createElement('hr');
        return hr;
    }
    static componentTotal(vendas: Vendas) : HTMLParagraphElement{
        const p = document.createElement('p');
        const total = vendas.total();
        p.textContent = `Total: ${total}`;
        return p;
    }
    static componentEstatiticas(vendas: Vendas,key: keyof TipoVenda, status: string) : HTMLParagraphElement{
        const p = document.createElement('p')
        const total = vendas.Estatiticas(key,status);
        p.textContent = `${status} : ${total}`;
        return p;
    }
    static componentDados(vendas: Vendas) : HTMLTableElement {
        const table = document.createElement('table');
        const tr = document.createElement('tr');
        for(let i=0; i < tdList.length;i++)
        {
            const td = document.createElement('td');
            td.textContent  = tdList[i];
            tr.appendChild(td);
        }
        table.appendChild(tr);
        for(let i = 0; i < vendas.listvendas.length; i++)
        {
            const tr = document.createElement('tr');
            const current = vendas.currentVenda(i) ;
            if(!current) return table;
            const kvendas = ["nome","email", "valor", "pagamento","status"];
            for(const key of kvendas)
            {
                const td = document.createElement('td');
                let value = current[key as keyof Venda]?.toString() || '';
                if(key === "valor")
                    value = `R$ ${Number(value).toFixed(2)}`;
                td.textContent = value;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        return table;
    }

}