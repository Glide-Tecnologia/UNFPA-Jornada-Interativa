import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'

function Pilares () {
  const navigate = useNavigate()

  const redireconar = () => {
    navigate('/dignidade')
  }

  return (
    <div>
      <img src='img/icpd-30.png' className='icpd-30 absolute' />
      <img src='img/elemento-3.png' className='elemento-3 absolute' />
      <img src='img/elemento-4.png' className='elemento-4 absolute' />
      <img
        src='img/seta.svg'
        className='seta absolute'
        onTouchStart={() => redireconar()}
        onClick={() => redireconar()}
      />
      <img src='img/Dignidade.svg' className='dignidade absolute' />
      <img src='img/Saúde.svg' className='saude absolute' />
      <img src='img/Espaço.svg' className='espaco absolute' />
      <img src='img/Governos.svg' className='governos absolute' />
      <img
        src='img/Sustentabilidade.svg'
        className='sustentabilidade absolute'
      />
      <div className='titulo-pilares absolute'>
        <h2>Conheça os</h2>
      </div>
      <div className='subtitulo-pilares absolute'>
        <h2>cinco pilares da CIPD!</h2>
      </div>
    </div>
  )
}

export default Pilares
