interface Produto {
    nome: string;
    preco: number;
  }
  
  async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    return response.json() as Promise<Produto>;
    // Ela retorna uma promessa que dentro dela ha um produto
  }
  
  // Podemos usar o as em diferentes locais.
  async function handleProduto1() {
    const produto = await fetchProduto();
    produto.nome;
  }
  
  async function handleProduto2() {
    const produto = (await fetchProduto()) as Produto;
    produto.nome;
  }
  
  async function handleProduto3() {
    const produto = await fetchProduto();
    (produto as Produto).nome;
  }



const video1 = document.querySelector(".player") as HTMLVideoElement;
const video2 = <HTMLVideoElement>document.querySelector(".player");

// e a mais segura porque sabe que pode ser null
const video3 = document.querySelector<HTMLVideoElement>(".player");

const video4 = document.querySelector(".player");


(video4 as HTMLVideoElement).volume;