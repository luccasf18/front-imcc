import { useState } from "react"
import "../css/explicacao.css"
import "../css/global.css"

function ExplicacaoImc() {
    const [dropdownAberto, setDropdownAberto] = useState(false)

    const toggleDropdown = () => {
        setDropdownAberto(!dropdownAberto)
    }

    return (
        <div className="explicacao-container">
            <div className="explicacao-header">
                <h3>O que é IMC?</h3>
                <button 
                    className="dropdown-btn" 
                    onClick={toggleDropdown}
                >
                    {dropdownAberto ? 'Ocultar Explicação' : 'Ver Explicação'} ▼
                </button>
            </div>

            {dropdownAberto && (
                <div className="dropdown-content">
                    <p>
                        O <strong>Índice de Massa Corporal (IMC)</strong> é uma medida utilizada para avaliar 
                        se uma pessoa está com peso adequado em relação à sua altura.
                    </p>
                    <p>
                        É calculado dividindo o peso (em quilogramas) pela altura (em metros) ao quadrado.
                    </p>
                    <div className="formula">
                        <strong>Fórmula: IMC = Peso ÷ (Altura)²</strong>
                    </div>
                    <p>
                        O IMC é uma ferramenta útil para identificar possíveis problemas de peso, 
                        mas não deve ser o único indicador de saúde. Consulte sempre um profissional 
                        de saúde para uma avaliação completa.
                    </p>
                </div>
            )}
        </div>
    )
}

export default ExplicacaoImc
