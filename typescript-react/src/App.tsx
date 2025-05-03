
import './App.css'
import React from "react";
import Input from './Form/InputComp'


function App() {
  const [cep,setCep] = React.useState<string>('');

  function handleBlur(event){
    console.log(event.target.value);
  }

  return (
    <>
    <form>
      <Input 
      type='text' 
      label='CEP'
      id='cep'  
      setValue={setCep} 
      value={cep} 
      placeholder='0000-000' 
      onBlur={handleBlur}
      />
    
    </form>
    </>
    
  )
}


export default App
