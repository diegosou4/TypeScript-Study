

import React from 'react'
import Prod from './Produtos'
import ButtonProdutos from './ButtonProdutos';


function useState() {
  const [ modal, setModal] = React.useState(true) 

  return (
    <>
      <div className='flex flex-row  items-center 
        justify-center gap-4 *:text-center *:rounded-md'>
        <div className='flex-2'>
            <ButtonProdutos nomeProduto='Tablet'></ButtonProdutos>
        </div>
        <div className='flex-2'>
            <ButtonProdutos nomeProduto='Smartphone'></ButtonProdutos>
        </div>
        <div className='flex-2'>
          <ButtonProdutos nomeProduto='Notebook'></ButtonProdutos>
        </div>
      </div>
    </>
    
  )
}