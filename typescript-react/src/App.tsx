
import './App.css'
import Header from "./Header";
import Footer from './Footer';
import Form from './Form/Form'
import TitleComponents from './Form/Titulo'

function App() {


  return (
    <>
    <Header/>
    <TitleComponents.Titulo texto="Esse e meu titulo !" prf="Esse e meu paragrafo"/>
    <TitleComponents.TituloChildren texto="Titulo Destruturado !" prf="Paragrafo desustruturado">
      Children Working
      </TitleComponents.TituloChildren>
    <Form/>
    <Footer/>
    </>
    
  )
}










export default App
