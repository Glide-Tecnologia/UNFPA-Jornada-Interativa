import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'

function Conhece () {
  const navigate = useNavigate()

  const redireconar = condicao => {
    localStorage.setItem('conhece', condicao)
    navigate('/cipd')
  }

  return (
    <div>
      <img src='img/icpd-30.png' className='icpd-30 absolute' />
      <img src='img/elemento-3.png' className='elemento-3 absolute' />
      <div className='texto-conhece absolute'>
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
      <div className='titulo-conhece absolute'>
        <h2>Você já conhece?</h2>
      </div>
      <div
        className='btn-nao absolute'
        onTouchStart={() => redireconar('Sim')}
        onClick={() => redireconar('Sim')}
      >
        Não, quero conhecer!
      </div>
      <div
        className='btn-sim absolute'
        onTouchStart={() => redireconar('Não')}
        onClick={() => redireconar('Não')}
      >
        Sim, mas quero saber mais!
      </div>
    </div>
  )
}

export default Conhece
