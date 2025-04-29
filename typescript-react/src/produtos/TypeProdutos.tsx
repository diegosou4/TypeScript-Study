
type fotosT = {
    titulo : string;
    src : string;

}



type ProdutosT = {
    id : string;
    fotos : fotosT,
    nome: string,
    preco: number,
    descricao: string,
    vendido: boolean,
    usuario_id: string
}



export default ProdutosT;