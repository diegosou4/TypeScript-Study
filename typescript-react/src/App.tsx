
import './App.css'
import React from 'react';
import Produto from './content/Produto'
import { GlobalStorage } from './content/GlobalContext';


function App() {
  
  return (
    <>
      <div>
          <GlobalStorage>
            <Produto/>
          </GlobalStorage>

      </div>
    </>
    
  )
}




export default App
