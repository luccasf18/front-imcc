import { useState } from "react"
import obesidadeM from "../assets/obesidade-M.jpg"
import "../css/global.css"
import "../css/resultado.css"
import TabelaImc from "./TabelaImc"

//destruct - Desestruturação - acessa os dados de outro componente
function Resultado({resultado}){
    const [dropdownAberto, setDropdownAberto] = useState(true) // Abre automaticamente

    const toggleDropdown = () => {
        setDropdownAberto(!dropdownAberto)
    }

    return (
        <div className="resultado-container">
            <div className="resultado-header">
                <h2>
                    {resultado ? `Seu IMC é de: ${resultado}` : 'Calcule seu IMC'}
                </h2>
                {resultado && (
                    <button 
                        className="dropdown-btn" 
                        onClick={toggleDropdown}
                    >
                        {dropdownAberto ? 'Ocultar Detalhes' : 'Ver Detalhes'} ▼
                    </button>
                )}
            </div>

            {resultado && dropdownAberto && (
                <div className="dropdown-content">
                    <div className="imagem-container">
                        <img src={obesidadeM} alt="Classificação IMC" className="imagem-imc" />
                    </div>
                    
                    <table className='tabela'>
                        <thead className='tabelaHeader'>
                            <tr>
                                <th>Classificação</th>
                                <th>IMC</th>
                            </tr>
                        </thead>
                        <tbody className="tabelaBody">
                            <tr>{TabelaImc(resultado)}</tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}
export default Resultado