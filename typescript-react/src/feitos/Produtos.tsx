



 
const Produtos = () => {
    
    const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];
    return (
        <>
            <div className="flex flex-rows gap-14 justify-center text-3xl *:text-center *:mt-4 text-cyan-800" >
            {
            produtos.map(({ nome, propriedades }) => (
                <div key={nome}>
                <span>{nome}</span>
                <ul>
                    {propriedades.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
                </div>
            ))}
            </div>
        </>

    )
}


export default Produtos;