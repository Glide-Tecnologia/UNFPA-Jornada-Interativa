import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'
import { animateElement } from '../animate'

function Eixos () {
  const navigate = useNavigate()
  const [eixo, setEixo] = useState('')

  const salvar = () => {
    // navigate('/estrategia')
  }

  const selecionar = condicao => {
    localStorage.setItem('eixo', condicao)
    setEixo(condicao)
  }

  useEffect(() => {
    let delay = 100
    animateElement('.icpd-30', 'rotateIn', delay)
    animateElement('.titulo-eixos', 'fadeIn', delay + 300)
    animateElement('.btn-dignidade', 'fadeInDown', delay + 500)
    animateElement('.btn-saude', 'fadeInDown', delay + 500 + 100)
    animateElement('.btn-espaco', 'fadeInDown', delay + 500 + 200)
    animateElement('.btn-governo', 'fadeInDown', delay + 500 + 300)
    animateElement('.btn-sustentabilidade', 'fadeInDown', delay + 500 + 400)
    animateElement('.seta', 'bounceIn', delay + 1600)
  }, [])

  const temaAtivo = tema => (tema == eixo ? 'active' : '')

  return (
    <div>
      <img src='img/icpd-30.png' className='icpd-30 absolute hidden' />
      <img src='img/elemento-3.png' className='elemento-3 absolute' />
      <img
        src='img/seta.svg'
        className='seta absolute hidden'
        onTouchStart={() => salvar()}
        onClick={() => salvar()}
      />
      <div className={`titulo-eixos absolute hidden`}>
        <h2>Qual desses eixos te chamou mais atenção?</h2>
      </div>

      <div
        className={`btn-dignidade absolute hidden ${temaAtivo(
          'Dignidade e Direitos Humanos'
        )}`}
        onTouchStart={() => selecionar('Dignidade e Direitos Humanos')}
        onClick={() => selecionar('Dignidade e Direitos Humanos')}
      >
        Dignidade e Direitos Humanos
      </div>
      <div
        className='btn-saude absolute hidden'
        onTouchStart={() => selecionar('Saúde')}
        onClick={() => selecionar('Saúde')}
      >
        Saúde
      </div>
      <div
        className='btn-espaco absolute hidden'
        onTouchStart={() => selecionar('Espaço e mobilidade')}
        onClick={() => selecionar('Espaço e mobilidade')}
      >
        Espaço e mobilidade
      </div>
      <div
        className='btn-governo absolute hidden'
        onTouchStart={() => selecionar('Governos com responsabilidade')}
        onClick={() => selecionar('Governos com responsabilidade')}
      >
        Governos com responsabilidade
      </div>
      <div
        className='btn-sustentabilidade absolute hidden'
        onTouchStart={() => selecionar('Sustentabilidade')}
        onClick={() => selecionar('Sustentabilidade')}
      >
        Sustentabilidade
      </div>
    </div>
  )
}

export default Eixos
