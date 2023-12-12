import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'

function Vida () {
  const navigate = useNavigate()

  const redireconar = () => {
    navigate('/eixos')
  }

  return (
    <div>
      <img src='img/elemento-6.png' className='elemento-3 absolute' />
      <img src="img/icpd-30.png" className='icpd-30 absolute' />


      <div className='titulo-mensagem absolute'>Estamos próximos de celebrar os 30 anos da CIPD,</div>
      <div className='subtitulo-mensagem absolute'>um marco para a saúde e os direitos reprodutivos.</div>

      <div className='mensagem absolute'>A sua colaboração é muito importante para que os direitos das juventudes sejam considerados para esse futuro!</div>

      <img
        src='img/seta.svg'
        className='seta absolute'
        onTouchStart={() => redireconar()}
        onClick={() => redireconar()}
      />
      
    </div>
  )
}

export default Vida
