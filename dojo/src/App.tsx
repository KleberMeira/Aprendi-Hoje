import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  const [valor, setValor] = useState(0); 
  
async function Incrementar(){
  const[valor, setValor] = useState(0);
  function Incrementar(){
    console.log(result.json());
    setValor(valor + 1);
}  



  return (
    <div className="App" onClick={FazerAlgo}>
      <header className="App-header">
        <p>{valor}</p>
      </header>
    </div>
  );

}

export default App;
