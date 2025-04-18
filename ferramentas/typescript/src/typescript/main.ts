import fetchData from "./fetchData";
import Vendas, { Venda } from "./models";
import { TransationApi , keyStatus} from "./fetchData";
import { estaticasComponents} from "./models";



async function createObject() : Promise<Vendas | null>
{
  const data = await fetchData<TransationApi[]>('https://api.origamid.dev/json/transacoes.json?');
  if(!data) return null;

  const myVendas = new Vendas(); 
  data.forEach((item) => {
  myVendas.newVenda(
        new Venda(
          item.Status,item.ID,
          item.Data,item.Nome,item['Forma de Pagamento'],
          item.Email,Number(item['Valor (R$)'].replaceAll(".","").replace(",",".") ),
          Boolean(item['Cliente Novo']))
        );
      }
    );
    return myVendas;
}




async function createElements(): Promise<void>{
  const vendas = await createObject(); 
  if(vendas === null)
      return;
  const div = document.getElementById('app');
  if(div === null)
      return;
  div.append(estaticasComponents.componentTotal(vendas));
  div.append(estaticasComponents.gethr());
  div.append(estaticasComponents.componentEstatiticas(vendas,"pagamento", "Cartão de Crédito"));
  div.append(estaticasComponents.componentEstatiticas(vendas,"pagamento", "Boleto"));
  div.append(estaticasComponents.gethr());
  for(let key of keyStatus)
    div.append(estaticasComponents.componentEstatiticas(vendas,"status", key));
  div.append(estaticasComponents.gethr());
  createTable(vendas);
}

createElements();




function createTable(vendas: Vendas): void{
  const table = document.getElementById('tableDiv');
  if(!table) return;

  table.append(estaticasComponents.componentDados(vendas));

}