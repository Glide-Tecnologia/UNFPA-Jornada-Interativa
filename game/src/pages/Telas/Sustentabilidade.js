import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'

function Pilares () {
  const navigate = useNavigate()

  const redireconar = () => {
    navigate('/eixos')
  }

  return (
    <div>
      <img src='img/elemento-3.png' className='elemento-3 absolute' />
      <img src='img/elemento-5.png' className='elemento-5 absolute' />
      <img
        src='img/seta.svg'
        className='seta absolute'
        onTouchStart={() => redireconar()}
        onClick={() => redireconar()}
      />
      <img src='img/Sustentabilidade.png' className='icone-pilares absolute' />
      <div className='titulo-pilares-itens absolute'>
        <h2>SUSTENTABILIDADE</h2>
      </div>
      <div className='texto-pilares-itens texto-sustentabilidade absolute'>
        <p>
          Impactos ambientais, incluindo as mudanças climáticas, afetam a vida
          de todas as pessoas. Sustentabilidade com equidade são chave para o
          bem-estar da população humana e do planeta.
        </p>
      </div>
    </div>
  )
}

export default Pilares
