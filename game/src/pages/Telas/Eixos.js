import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'

function Eixos () {
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
      <div className='titulo-eixos absolute'>
        <h2>Qual desses eixos te chamou mais atenção?</h2>
      </div>
      <div
        className='btn-dignidade absolute'
        onTouchStart={() => redireconar('Dignidade e Direitos Humanos')}
        onClick={() => redireconar('Dignidade e Direitos Humanos')}
      >
        Dignidade e Direitos Humanos
      </div>
      <div
        className='btn-saude absolute'
        onTouchStart={() => redireconar('Saúde')}
        onClick={() => redireconar('Saúde')}
      >
        Saúde
      </div>
      <div
        className='btn-espaco absolute'
        onTouchStart={() => redireconar('Espaço e mobilidade')}
        onClick={() => redireconar('Espaço e mobilidade')}
      >
        Espaço e mobilidade
      </div>
      <div
        className='btn-governo absolute'
        onTouchStart={() => redireconar('Governos com responsabilidade')}
        onClick={() => redireconar('Governos com responsabilidade')}
      >
        Governos com responsabilidade
      </div>
      <div
        className='btn-sustentabilidade absolute'
        onTouchStart={() => redireconar('Sustentabilidade')}
        onClick={() => redireconar('Sustentabilidade')}
      >
        Sustentabilidade
      </div>
    </div>
  )
}

export default Eixos
