
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Produto from './routes/Produto';
import Contato from './routes/Contato';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="" element={<Home/>}></Route>
          <Route path="/produtos/:id" element={<Produto/>}></Route>
          <Route path="/contato/" element={<Contato/>}></Route>
      </Routes>
    
    </BrowserRouter>
 
    </>
    
  )
}


export default App
