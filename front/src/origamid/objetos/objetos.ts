
interface Produto {
    nome: string;
    quantidade: number;
}

const produto1 = {
    nome: "Notebook",
    quantidade: 10,
    cor: "Azul",
};

const produto2 = {
    nome: "Geladeira",
    quantidade: 30,
    freezer: true,
};

// Eu posso ter propiedades a mais, mas nao menos
const servico1 = {
    nome: "Instalacao",


}

function mostrarQuantidade(produto:Partial<Produto>){
    if(produto.nome)
        console.log("Nome:" ,produto.nome);
    if(produto.quantidade)
        console.log("Quantidade:" ,produto.quantidade + 20);
}

mostrarQuantidade(produto1);
mostrarQuantidade(produto2);
mostrarQuantidade(servico1);



interface Post {
    titulo: string;
    visualizacoes: number;
    tags: string[];
    [key: string]: unknown
};

const artigo: Post = {
    titulo: "Como aprender HTML",
    visualizacoes: 3000,
    tags: ["HTML","Front End"],
    autor: 'Diego',
};

interface ObjetoLiteral {
    [key: string]: unknown;
}

type ObjetoLiteral2 = Record<"titulo" | "autor", unknown>

function mostrarTitulo(obj : ObjetoLiteral2){
    if('titulo' in obj){
        console.log(obj.titulo)
    }
}


// mostrarTitulo(22)
mostrarTitulo({
    titulo: "HTML e CSS",
    autor: "Diego"
});