import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'
import { animateElement } from '../animate'

function Pilares () {
  const navigate = useNavigate()

  const redireconar = () => {
    navigate('/dignidade')
  }

  const home = () => {
    navigate('/home')
  }

  useEffect(() => {
    let delay = 100
    animateElement('.icpd-30', 'rotateIn', delay)
    animateElement('.titulo-pilares', 'fadeIn', delay + 300)
    animateElement('.subtitulo-pilares', 'fadeIn', delay + 300)
    animateElement('.dignidade', 'bounce', delay + 600)
    animateElement('.saude', 'bounce', delay + 600 + 50)
    animateElement('.espaco', 'bounce', delay + 600 + 100)
    animateElement('.governos', 'bounce', delay + 600 + 150)
    animateElement('.sustentabilidade', 'bounce', delay + 600 + 200)
    animateElement('.seta', 'bounceIn', delay + 1300)
  }, [])

  return (
    <div>
      <img
        src='img/home.png'
        className='btn-home absolute'
        onTouchStart={() => home()}
      />
      <img src='img/icpd-30.png' className='icpd-30 absolute hidden' />
      <img src='img/elemento-3.png' className='elemento-3 absolute' />
      <img src='img/elemento-4.png' className='elemento-4 absolute' />
      <img
        src='img/seta.svg'
        className='seta absolute hidden'
        onTouchStart={() => redireconar()}
        onClick={() => redireconar()}
      />
      <img src='img/Dignidade.svg' className='dignidade absolute hidden' />
      <img src='img/Saúde.svg' className='saude absolute hidden' />
      <img src='img/Espaço.svg' className='espaco absolute hidden' />
      <img src='img/Governos.svg' className='governos absolute hidden' />
      <img
        src='img/Sustentabilidade.svg'
        className='sustentabilidade absolute hidden'
      />
      <div className='titulo-pilares absolute hidden'>
        <h2>Conheça os</h2>
      </div>
      <div className='subtitulo-pilares absolute hidden'>
        <h2>cinco pilares da CIPD!</h2>
      </div>
    </div>
  )
}

export default Pilares
