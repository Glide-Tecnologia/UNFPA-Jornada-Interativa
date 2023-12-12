import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'

function Estrategia () {
  const navigate = useNavigate()

  const redireconar = () => {
    navigate('/pilares')
  }

  return (
    <div>
      <img src='img/icpd-30.png' className='icpd-30 absolute' />
      <img src='img/elemento-6.png' className='elemento-6 absolute' />

      <img src='img/Mão.png' className='mao absolute' />
      <img src='img/Coração.png' className='coracao absolute' />
      <img src='img/Mundo.png' className='mundo absolute' />
      <div className='titulo-estrategia absolute'>
        <h2>O UNFPA tem uma estratégia específica para as juventudes!</h2>
      </div>
      <div className='subtitulo-estrategia absolute'>
        <h2>“Meu corpo, minha vida e meu mundo”</h2>
      </div>
      <div
        className='btn-como absolute'
        onTouchStart={() => redireconar()}
        onClick={() => redireconar()}
      >
        Como assim?
      </div>
    </div>
  )
}

export default Estrategia
