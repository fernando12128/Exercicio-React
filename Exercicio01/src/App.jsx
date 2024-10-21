import './App.css'
import Hello from './components/hello'
import Idade from './components/Idade'
import Nome from './components/Nome'
import Usuario from './components/Usuario'
import Escola from './components/Escola'
import Calcular from './components/Calcular'
import Desconto from './components/Desconto'
import Online from './components/Online'
import Nivel from './components/Nivel'
import Logar from './components/Logar'


function App() {


  return (
    <>
      <Hello/>
      <Nome nome="Fernando" />
      <Idade numero = "15"/>
      
      <Usuario autenticador = {false} />
      <Escola estudante={false} />
      <Calcular nota= "4"/>
      <Desconto temDesconto ={true}/>
      <Online online={false}/>
      <Nivel nivel = "intermediário"/>
      <Logar logado={true} />
    </>
  )
}

export default App
