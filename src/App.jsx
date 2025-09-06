import { useState } from "react";
import Swal from 'sweetalert2';
import Ad from "./components/Ad";
import Ad2 from "./components/Ad2";
import ExplicacaoImc from "./components/ExplicacaoImc";
import Header from "./components/Header";
import Resultado from "./components/Resultado";
import './css/estilo.css';
import './css/global.css';


function App() {

  // HOOK- useState - Manipula o estado da variável
  const[altura,setAltura]=useState();
  const [peso,setPeso]=useState();
  const[resultado,setResultado]=useState();
  const [mostrarResultado,setMostrarResultado]=useState(false);

  const calcularImc=(e)=>{
    e.preventDefault(); //evita o recarregamento da página
    const alturaNumerica = parseFloat(altura);
    if(alturaNumerica > 0 && peso > 0){
      const imc=peso / (alturaNumerica*alturaNumerica);
      setResultado(imc.toFixed(2)); //arrendonda para 2 casas decimais
      setMostrarResultado(true);
      
      Swal.fire({
        icon: 'success',
        title: 'IMC Calculado!',
        text: `Seu IMC é ${imc.toFixed(2)}`,
        confirmButtonColor: '#755c1b',
        timer: 2000,
        showConfirmButton: false
      });
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor digite valores válidos!',
        confirmButtonColor: '#755c1b'
      });
      setMostrarResultado(false);
    }
  }

  
  return (
    <div className="container">
      <div className="ad-extreme-left">
        <Ad/>
      </div>
      
      <div className="main-content">
        <div className="calculator-section">
          <div className="box">
            <Header/>
            
            <form>
              <div className="altura-peso"> 
                <input type="text" 
                id="altura" 
                placeholder="Digite sua altura" 
                value={altura} 
                onChange={(e)=>{
                  let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
                  
                  if (value.length === 0) {
                    setAltura('');
                  } else if (value.length === 1) {
                    setAltura(value);
                  } else if (value.length === 2) {
                    setAltura(value);
                  } else if (value.length === 3) {
                    setAltura(value.slice(0, 1) + '.' + value.slice(1, 3));
                  }
                }} 
                />
                <label htmlFor="altura" className="mini-texto"><span >(exemplo: 1.80m)</span></label>
              </div>

              <div className="altura-peso">
                
                <input type="number" 
                id="peso" 
                placeholder="Digite seu peso" 
                value={peso} 
                onChange={(e)=>{
                  const value = e.target.value;
                  if (value.length <= 3) {
                    setPeso(parseFloat(value));
                  }
                }} 
                />
                <label htmlFor="peso" className="mini-texto"><span>(exemplo: 60kg)</span></label>
              </div>
              <button onClick={calcularImc} className="botao">Calcular</button>
            </form>
          </div>
        </div>
        
        <div className="center-column">
          <div className="resultado-box">
            <Resultado resultado={resultado}/>
            <ExplicacaoImc/>
          </div>
        </div>
      </div>
      
      <div className="ad-extreme-right">
        <Ad2/>
      </div>
    </div>
  )
}

export default App
