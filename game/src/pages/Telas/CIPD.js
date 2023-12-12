import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'

function CIPD () {
  const navigate = useNavigate()

  const redireconar = () => {
    navigate('/pilares')
  }

  return (
    <div>
      <img src='img/icpd-30.png' className='icpd-30 absolute' />
      <img src='img/elemento-3.png' className='elemento-3 absolute' />
      <img
        src='img/seta.svg'
        className='seta absolute'
        onTouchStart={() => redireconar()}
        onClick={() => redireconar()}
      />
      <div className='titulo-cipd absolute'>
        <h2>CIPD</h2>
      </div>
      <div className='subtitulo-cipd absolute'>
        <h2>
          É a sigla para a Conferência Internacional sobre População e
          Desenvolvimento.
        </h2>
      </div>

      <div className='texto-cipd absolute'>
        <p>
          Essa foi uma reunião realizada em 1994 no Cairo, Egito, onde 179
          países adotaram um programa de ação revolucionário que reivindicava
          que a saúde reprodutiva e os direitos das mulheres deveriam ocupar um
          lugar central nos esforços de desenvolvimento.
        </p>
      </div>
    </div>
  )
}

export default CIPD
