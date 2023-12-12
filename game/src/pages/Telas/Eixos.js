import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'
import { animateElement } from '../animate'

function Eixos () {
  const navigate = useNavigate()

  const redireconar = condicao => {
    localStorage.setItem('eixo', condicao)
    navigate('/estrategia')
  }

  useEffect(() => {
    let delay = 100;
    animateElement(".icpd-30", "rotateIn", delay)
    animateElement(".titulo-eixos", "fadeIn", delay+300)
    animateElement(".btn-dignidade", "fadeInDown", delay+500)
    animateElement(".btn-saude", "fadeInDown", delay+500+100)
    animateElement(".btn-espaco", "fadeInDown", delay+500+200)
    animateElement(".btn-governo", "fadeInDown", delay+500+300)
    animateElement(".btn-sustentabilidade", "fadeInDown", delay+500+400)
    animateElement(".seta", "bounceIn", delay+1600)
  }, [])

  return (
    <div>
      <img src='img/icpd-30.png' className='icpd-30 absolute hidden' />
      <img src='img/elemento-3.png' className='elemento-3 absolute' />
      <img
        src='img/seta.svg'
        className='seta absolute hidden'
        onTouchStart={() => redireconar()}
        onClick={() => redireconar()}
      />
      <div className='titulo-eixos absolute hidden'>
        <h2>Qual desses eixos te chamou mais atenção?</h2>
      </div>
      <div
        className='btn-dignidade absolute hidden'
        onTouchStart={() => redireconar('Dignidade e Direitos Humanos')}
        onClick={() => redireconar('Dignidade e Direitos Humanos')}
      >
        Dignidade e Direitos Humanos
      </div>
      <div
        className='btn-saude absolute hidden'
        onTouchStart={() => redireconar('Saúde')}
        onClick={() => redireconar('Saúde')}
      >
        Saúde
      </div>
      <div
        className='btn-espaco absolute hidden'
        onTouchStart={() => redireconar('Espaço e mobilidade')}
        onClick={() => redireconar('Espaço e mobilidade')}
      >
        Espaço e mobilidade
      </div>
      <div
        className='btn-governo absolute hidden'
        onTouchStart={() => redireconar('Governos com responsabilidade')}
        onClick={() => redireconar('Governos com responsabilidade')}
      >
        Governos com responsabilidade
      </div>
      <div
        className='btn-sustentabilidade absolute hidden'
        onTouchStart={() => redireconar('Sustentabilidade')}
        onClick={() => redireconar('Sustentabilidade')}
      >
        Sustentabilidade
      </div>
    </div>
  )
}

export default Eixos
