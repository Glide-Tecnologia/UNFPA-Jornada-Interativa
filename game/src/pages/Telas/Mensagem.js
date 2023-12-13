import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'
import { animateElement } from '../animate'

function Vida () {
  const navigate = useNavigate()

  const redireconar = () => {
    navigate('/conclusao')
  }

  const home = () => {
    navigate('/home')
  }

  useEffect(() => {
    let delay = 100
    animateElement('.icpd-30', 'rotateIn', delay)
    animateElement('.titulo-mensagem', 'fadeInLeft', delay + 300)
    animateElement('.subtitulo-mensagem', 'fadeInLeft', delay + 500)
    animateElement('.mensagem', 'fadeInLeft', delay + 700)
    animateElement('.seta', 'bounceIn', delay + 1400)
  }, [])

  return (
    <div>
      <img
        src='img/home.png'
        className='btn-home absolute'
        onTouchStart={() => home()}
      />
      <img src='img/elemento-6.png' className='elemento-3 absolute' />
      <img src='img/icpd-30.png' className='icpd-30 absolute hidden' />

      <div className='titulo-mensagem absolute hidden'>
        Estamos próximos de celebrar os 30 anos da CIPD,
      </div>
      <div className='subtitulo-mensagem absolute hidden'>
        um marco para a saúde e os direitos reprodutivos.
      </div>

      <div className='mensagem absolute hidden'>
        A sua colaboração é muito importante para que os direitos das juventudes
        sejam considerados para esse futuro!
      </div>

      <img
        src='img/seta.svg'
        className='seta absolute hidden'
        onTouchStart={() => redireconar()}
        onClick={() => redireconar()}
      />
    </div>
  )
}

export default Vida
