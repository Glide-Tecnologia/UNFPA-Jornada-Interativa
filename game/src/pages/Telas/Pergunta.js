import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'
import { animateElement } from '../animate'

function Pergunta () {
  const navigate = useNavigate()

  const redireconar = () => {
    navigate('/temas')
  }

  const home = () => {
    navigate('/home')
  }

  useEffect(() => {
    let delay = 100
    animateElement('.icpd-30', 'rotateIn', delay)
    animateElement('.texto-pergunta', 'fadeInDown', delay + 300)
    animateElement('.titulo-pergunta', 'fadeInUp', delay + 500)
    animateElement('.seta', 'bounceIn', delay + 900)
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
      <img src='img/elemento-44.png' className='elemento-4 absolute' />
      <div className='texto-pergunta absolute hidden'>
        <p>
          A partir desses eixos e pilares, vários temas são importantes para a
          juventude brasileira.
        </p>
      </div>
      <div className='titulo-pergunta absolute hidden'>
        <h2>Para você, quais são os cinco temas mais importantes?</h2>
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

export default Pergunta
