import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Telas.css'

function Pergunta () {
  const navigate = useNavigate()

  const redireconar = () => {
    navigate('/temas')
  }

  return (
    <div>
      <img src='img/icpd-30.png' className='icpd-30 absolute' />
      <img src='img/elemento-3.png' className='elemento-3 absolute' />
      <img src='img/elemento-44.png' className='elemento-4 absolute' />
      <div className='texto-pergunta absolute'>
        <p>
          A partir desses eixos e pilares, vários temas são importantes para a
          juventude brasileira.
        </p>
      </div>
      <div className='titulo-pergunta absolute'>
        <h2>Para você, quais são os cinco temas mais importantes?</h2>
      </div>
      <img
        src='img/seta.svg'
        className='seta absolute'
        onTouchStart={() => redireconar()}
        onClick={() => redireconar()}
      />
    </div>
  )
}

export default Pergunta
