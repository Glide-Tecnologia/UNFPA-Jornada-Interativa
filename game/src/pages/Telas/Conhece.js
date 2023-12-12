import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'
import { animateElement } from '../animate'

function Conhece () {
  const navigate = useNavigate()

  const redireconar = condicao => {
    localStorage.setItem('conhece', condicao)
    navigate('/cipd')
  }

  useEffect(() => {
    let delay = 100;
    animateElement(".icpd-30", "rotateIn", delay)
    animateElement(".texto-conhece", "fadeInLeft", delay+200)
    animateElement(".titulo-conhece", "fadeIn", delay+600)
    animateElement(".btn-nao", "fadeInDown", delay+900)
    animateElement(".btn-sim", "fadeInDown", delay+1100)
  }, [])

  return (
    <div>
      <img src='img/icpd-30.png' className='icpd-30 absolute hidden' />
      <img src='img/elemento-3.png' className='elemento-3 absolute' />
      <div className='texto-conhece absolute hidden'>
        <p>
          Em 2024, celebramos os 30 anos do Programa de Ação do Cairo, o
          CIPD+30, um marco muito importante sobre População e Desenvolvimento.{' '}
        </p>
        <p>
          E hoje queremos contar um pouquinho mais desse marco e também queremos
          te ouvir sobre as prioridades que você gostaria de ver no futuro dessa
          agenda.
        </p>
      </div>
      <div className='titulo-conhece absolute hidden'>
        <h2>Você já conhece?</h2>
      </div>
      <div
        className='btn-nao absolute hidden'
        onTouchStart={() => redireconar('Não')}
        onClick={() => redireconar('Não')}
      >
        Não, quero conhecer!
      </div>
      <div
        className='btn-sim absolute hidden'
        onTouchStart={() => redireconar('Sim')}
        onClick={() => redireconar('Sim')}
      >
        Sim, mas quero saber mais!
      </div>
    </div>
  )
}

export default Conhece
