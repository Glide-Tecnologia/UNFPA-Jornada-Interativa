import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'

function Mundo () {
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
      <img src='img/Mundo.png' className='icone-pilares icone-mundo absolute' />
      <div className='titulo-pilares-itens absolute'>
        <h2>MEU MUNDO</h2>
      </div>
      <div className='texto-pilares-itens texto-mundo absolute'>
        <p>
          Que a juventude possa liderar e participar do desenvolvimento
          sustentável, incluindo a luta contra as mudanças climáticas, pela
          segurança e paz, e por zero discriminação ou violência de gênero,
          etnicoracial ou outras.
        </p>
      </div>
    </div>
  )
}

export default Mundo
