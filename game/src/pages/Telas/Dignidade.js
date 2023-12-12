import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'

function Pilares () {
  const navigate = useNavigate()

  const redireconar = () => {
    navigate('/saude')
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
      <img src='img/Dignidade.png' className='icone-pilares absolute' />
      <div className='titulo-pilares-itens absolute'>
        <h2>DIGNIDADE E DIREITOS HUMANOS</h2>
      </div>
      <div className='texto-pilares-itens absolute'>
        <p>
          Todas as pessoas são titulares de direitos humanos e liberdade, e isso
          deve ser garantido.
        </p>
      </div>
    </div>
  )
}

export default Pilares
