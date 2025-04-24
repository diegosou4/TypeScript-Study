

const EventoBtn = () => {
    function handleClick(event : any) {
        console.log(event.target);
    }
    return <button onClick={handleClick} onMouseMove={handleClick}>Clique</button>
}

const EventoBtnAnonimo = () => {
    
    return <button onClick={(event) => console.log(event)} >Clique</button>
}


const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };
  
  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };
  
  function Info(){
    const dados = mario;
    const total = dados.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b);
    return(
    
      <div className='p-10 rounded-xl *:mt-2 bg-white text-lg'>
        <p className='text-black'>Nome: {dados.cliente}</p>
        <p className='text-black'>Idade: {dados.idade}</p>
        <p className='text-black'>Situacao: <span className={`${dados.ativa ? 'text-green-800' : 'text-red-600'}`}> {dados.ativa ? 'Ativo': 'Desativado'}</span></p>
        <p className='text-black '>Total: R$ {total}</p>
   
        {total > 10000 && <p className='text-black '>Você está gastando muito</p>}    
     </div>)
  }
  
  // Fragment 
  // Por norma o React Retorna apenas um elemento, o que pode fazer e
  // e envolver os elementos dentro de uma div assim consigo retornar
  // ou usar os Fragment que e uma solucao melhor quando nao queremos
  // ter varias divs dentro do nosso HTML tornando a leitura complexa
  function Details(){
    return (
      <Fragment>
        <p className='text-white '>Estamos vendo como o React comporta</p>
      </Fragment>
    );
  
  }
  
  function Ping(){
    return <div>
        <span className='bg-purple-300 py-2 block animate-pulse'></span>
    </div>
  }
  
  // Com css
  
  function WorkCss(){
    const h1Style = {
      color : 'cyan',
      fontSize: '30px',
      fontFamily: 'Helvetica',
    };
    return(
      <Fragment>
        <p style={h1Style}>Esse e o Work css com atributos do css</p>
        <p style={{color : 'green', fontSize : '22px'}}>Podemos Atribuir assim tambem</p>
      </Fragment>
  
    )
  
  
  }

export default {
    EventoBtn,
    EventoBtnAnonimo
}