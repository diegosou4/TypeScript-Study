

export  const keyStatus:string[] = ["Paga","Recusada pela operadora de cartão","Aguardando pagamento","Estornada"]
export type TransacaoPagamento = "Boleto" | "Cartão de Crédito";
export type TransacaoStatus = typeof keyStatus[number];


export interface TransationApi {
    Status: TransacaoStatus;
    ID : number;
    Data: Date;
    Nome: string;
    Email: string;
    ['Forma de Pagamento']: TransacaoPagamento ;
    ['Valor (R$)']: string;
    ['Cliente Novo']: number;
}


export default async function fetchData<T>(url:string): Promise<T | null> {
    try{
        const response = await fetch(url);
        if(!response.ok) throw new Error("Error " + response.status );
        const json = await response.json();
        return json;
    }catch(error){
        if(error instanceof Error) console.error("fetchData : ", error);
        return null;    
    }
}